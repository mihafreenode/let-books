# Android Camera Debugging Note

## Status

This note records the scanner-camera investigation and code changes for `https://letbooks.org/static-demo/#/scanner`.

It is a troubleshooting record, not a claim of verified device success.

Real Android-device validation is still required.

## What Was Tested

- Reviewed the live scanner startup path in `static-demo/app.js`
- Traced scanner-library camera startup, error handling, device selection, and cleanup
- Patched the scanner startup path to preserve real DOMException details instead of collapsing failures into a generic error
- Added a compact in-app diagnostics panel and development console helpers
- Added a safer fallback chain for Android camera startup
- Added documentation for ADB and Chrome remote debugging workflow
- Attached a real Android phone through Windows `adb.exe` from WSL
- Opened both localhost and live Let Books scanner routes on Android Chrome
- Inspected the Android Chrome page through forwarded Chrome DevTools Protocol on Windows localhost
- Captured console output, runtime exceptions, network failures, service-worker state, route state, and Android camera-service events

## Device / Browser / Environment Details

- Target page: `https://letbooks.org/static-demo/#/scanner`
- Expected browser: Android Chrome
- Actual device validation was performed on a connected Android phone through ADB
- Browser reported through CDP: `Chrome/148.0.7778.178`
- User agent reported through CDP: `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Mobile Safari/537.36`
- Validation paths used:
  - `http://localhost:8080/static-demo/#/scanner?mode=isbn`
  - `https://letbooks.org/static-demo/#/scanner`
  - `https://webrtc.github.io/samples/src/content/getusermedia/gum/`

## Exact Camera Error Name and Message

Previously observed UI error:

- `Камерата не можеше да се стартува. Error: Unknown camera error.`

Current code behavior:

- the UI now shows the real browser error in the status panel, for example `NotReadableError: Could not start video source`
- the diagnostics panel now records:
  - `error.name`
  - `error.message`
  - `error.constraint`
  - `error.stack`
  - current constraints
  - selected device/deviceId
  - user agent
  - current URL/protocol

Live-site Android result observed through CDP before deployment of the local fix:

- `Cannot transition to a new state, already under transition`

Localhost Android result observed during an intermediate broken build:

- `Locale sl is missing 13 keys. First missing key: scanner.debugPermission`

That localhost splash failure was a real JavaScript startup failure, not only an automation timing issue.

## Constraints That Previously Failed

The previous scanner startup path used a more aggressive source-selection flow that included:

- high preferred resolution constraints
- an `exact` rear-facing constraint path
- a preflight `getUserMedia()` open/close cycle before the scanner-library start

These are plausible contributors to Android Chrome startup instability.

## Constraints Now Tried

The updated startup path now uses this fallback sequence for live camera startup:

1. `video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } }`
2. `video: { facingMode: { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 480 } }`
3. `video: true`

When a concrete device is selected or remembered, the same 1280x720 then 640x480 fallback sequence is tried with `deviceId: { exact: ... }` before falling back to generic rear-camera preferences.

The startup path now avoids `facingMode: { exact: "environment" }` for the default Android path.

Observed working local Android scanner startup after the patch:

- selected candidate: `environment-device-1280x720`
- active device label: `camera 2, facing back`
- active track facing mode: `environment`
- active track resolution reported by the app: `720x1280`

## Plain getUserMedia vs Scanner Library

To separate browser/camera failures from scanner-library failures:

- the scanner startup wrapper now captures the effective `getUserMedia()` constraints used during scanner-library startup
- a plain `getUserMedia()` probe can be run independently
- on startup failure, the app can record whether plain `getUserMedia()` also failed or succeeded

Development helper exposed in development builds:

```js
window.__letBooksCameraDebug = {
  testBasicCamera,
  enumerateDevices,
  stopCamera,
  getLastCameraError
}
```

Examples:

```js
await window.__letBooksCameraDebug.enumerateDevices()
await window.__letBooksCameraDebug.testBasicCamera()
window.__letBooksCameraDebug.stopCamera()
window.__letBooksCameraDebug.getLastCameraError()
```

Interpretation:

- WebRTC/plain `getUserMedia()` works but Let Books scanner startup fails: likely scanner-library integration or constraint-passing issue
- WebRTC/plain `getUserMedia()` also fails: likely Chrome/device/camera-state/permission issue

Observed comparison during this investigation:

- the plain WebRTC sample loaded correctly on Android Chrome
- in a passive automated open, the WebRTC sample stayed on its `Open camera` button and did not auto-open the stream
- Let Books auto-opened the rear camera as intended in the patched localhost build
- the live deployed Let Books build still failed in the scanner startup path even though hash routing reached the scanner screen

## ADB and Chrome Remote Debugging Workflow

1. Connect the Android phone with USB debugging enabled.
2. Confirm the device is visible:

```bash
adb devices
```

3. Open desktop Chrome:

```text
chrome://inspect/#devices
```

4. Inspect the phone tab running:

```text
https://letbooks.org/static-demo/#/scanner
```

5. Capture camera and Chromium logs from a terminal:

```bash
adb logcat | grep -i camera
adb logcat | grep -i chromium
```

6. Compare behavior with the plain WebRTC sample:

```text
https://webrtc.github.io/samples/src/content/getusermedia/gum/
```

Interpretation:

- WebRTC demo works, Let Books fails: likely app/scanner constraints issue
- WebRTC demo fails too: likely Chrome/device/permission/camera-state issue

## ADB Logcat Findings

- Android camera-service logs confirmed that Chrome opened rear camera device `2` during localhost Let Books scanner startup
- In the successful patched localhost run, the app reached scanner mount, started camera init, and succeeded with the rear camera
- Earlier logs from stale or older builds showed quick open/disconnect cycles for Chrome camera sessions
- `dumpsys media.camera` showed no permanently stuck active Chrome camera client after the failed runs
- Historical Samsung camera-service events on the device also showed occasional non-Chrome conflicts such as `Too many cameras already open`, but that specific conflict was not the primary failure in the final patched localhost run

## Final Suspected Cause

There were two separate Android-side problems:

1. Localhost splash/loading stall during automation:

- real JavaScript startup failure caused by locale-resource validation after new diagnostics keys were added only to some locale files
- stale localhost service-worker cache could also keep serving older app shell files, producing behavior that did not match current source

2. Live `https://letbooks.org/static-demo/#/scanner` scanner failure:

- the deployed build still contains the older scanner startup path
- Android Chrome reaches the scanner route, but scanner initialization fails with `Cannot transition to a new state, already under transition`
- no service worker is currently controlling the live `letbooks.org/static-demo` page in the observed run, so this live failure did not require a stale service-worker explanation

Most likely contributing factors before this patch:

- scanner startup errors were being normalized too aggressively in the UI
- scanner-library startup could hide the original DOMException details
- the startup path used stricter/less Android-friendly constraint combinations than necessary
- the previous preflight camera open/close cycle added extra camera churn before scanner startup
- remembered or inferred camera selection was not persisted or debugged clearly enough
- Android localhost development runs could be misled by stale `service-worker.js` cache state
- startup failures could leave the splash screen visible because the old `init().catch(...)` path did not explicitly clear the boot splash

## Fixes Applied

- preserved real DOMException name/message/constraint/stack in startup failures
- added compact collapsible camera diagnostics to the scanner UI
- added permission, device enumeration, selected device, active settings, and capabilities diagnostics
- added Android-friendlier fallback constraints
- removed the extra preflight camera-open cycle from the default scanner startup path
- added remembered last-working camera preference for rear/default use
- clear remembered camera preference automatically if it fails during startup
- added compact advanced camera selector when multiple video devices are available
- stop and clear stale streams before restart attempts
- added development console helpers for device enumeration, plain camera tests, and last-error inspection
- added lifecycle logging for:
  - app boot started
  - routes registered
  - route matched
  - scanner component mounted
  - camera init started
  - camera init failed/succeeded
- added a visible boot-time fallback when startup does not finish in time
- changed localhost service-worker cache name from `let-books-local-demo-v1` to `let-books-local-demo-v2` to reduce stale-shell reuse during Android testing
- filled the new diagnostics locale keys across the static-demo locale files so startup no longer fails during locale validation

## Remaining Risks / Follow-Up Tasks

- scanner-library behavior may still differ across Chrome versions and vendor camera stacks
- `navigator.permissions.query({ name: "camera" })` is not supported uniformly across browsers
- device labels may remain hidden until permission has been granted at least once
- a successful plain `getUserMedia()` probe does not guarantee scanner decode quality or autofocus quality
- the live public deployment at `https://letbooks.org/static-demo/#/scanner` still needs the patched scanner code to be published before the live-site failure can be retested
- the localhost service worker can still affect future runs if developers test against an older cache namespace or old tabs without reload

## Classification Summary

Localhost splash issue during Android automation:

- real app loading failure: yes
- stale cache/service worker involved: yes, in some runs
- JavaScript runtime error involved: yes
- missing JS/CSS/module asset: no evidence in the observed run
- router/hash issue: no, hash routing worked after successful boot
- Android automation timing issue only: no
- camera permission prompt blocking progress: no evidence in the observed successful localhost run

Live `https://letbooks.org/static-demo/#/scanner` issue:

- stale cache/service worker: no evidence in the observed run
- JavaScript runtime error: yes, scanner startup threw `Cannot transition to a new state, already under transition`
- router/hash issue: no, the page remained on `#/scanner`
- missing asset: no JS/CSS/module loading failure observed; only a later non-fatal Open Library cover `404` in localhost book-lookup flow
- other: yes, older deployed scanner startup logic is still failing on Android Chrome and should be retested after deployment of the local patch set
