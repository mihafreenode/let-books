# Android Mobile Debugging Guide

This workflow is intentionally optimized for:

- physical Android devices
- live camera streams
- runtime instrumentation
- rapid iteration/debugging

It is **not** intended primarily for generic CI/browser automation.

---

## Purpose

Document the preferred workflow for:

- Android Chrome debugging
- Playwright mobile debugging
- ADB usage
- barcode/QR testing
- real camera validation
- runtime instrumentation

---

## Quick Start (Windows + WSL + Android Chrome)

### Windows Host

Install Android platform tools:

```powershell
winget install -e --id Google.PlatformTools
adb devices
```

Enable:

- Android Developer Options
- USB debugging
- authorize the computer on the device

---

### WSL Setup

Prefer reusing the Windows adb server instead of starting a separate Linux adb instance.

```bash
# Point WSL adb client to Windows adb server
export ADB_SERVER_SOCKET=tcp:$(ip route | awk '/default/ {print $3}'):5037

# Resolve the Windows adb executable; repeated runs reuse a persistent cache
ADB_EXE="$(tools/wsl-find-adb.sh)"

# Verify device visibility
"$ADB_EXE" devices
```

---

### Chrome Remote Debugging

Forward Chrome DevTools socket:

```bash
"$ADB_EXE" forward tcp:9222 localabstract:chrome_devtools_remote
```

Verify:

```bash
curl http://127.0.0.1:9222/json/version
```

---

### Playwright CDP Attach

Preferred workflow:

```js
const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');

const context = browser.contexts()[0];
const page = context.pages()[0];
```

This preserves:

- login state
- cookies
- camera permissions
- existing Chrome session state

and avoids repeated browser relaunches during mobile camera/barcode debugging.

---

### Preferred Debugging Workflow

Preferred order:

1. Open site manually in Android Chrome
2. Grant camera permissions manually
3. Connect Playwright over CDP
4. Inject runtime instrumentation/debug overlays
5. Reuse the same browser session during iteration

Avoid:

- repeated browser launches
- repeated permission prompts
- unnecessary rebuild/restart cycles
- relying solely on desktop emulation for barcode/camera validation

### CDP Health Check Script

Use `tools/android-cdp-check.sh` when you need a fast PASS/FAIL check for the Android Chrome DevTools path.

It checks:

- adb/device visibility
- Chrome DevTools socket exposure on the phone
- `adb forward tcp:9222 ...`
- `http://127.0.0.1:9222/json/version`
- `http://127.0.0.1:9222/json/list`

Example:

```bash
tools/android-cdp-check.sh
```

This script prefers:

- Windows `adb.exe` resolved through `tools/wsl-find-adb.sh` when running in WSL
- Linux `adb` when running natively on Linux
- `adb.exe` on PATH when running from a Windows bash environment

---

## Choosing the Right Mobile Debugging Workflow

Before running commands, decide which workflow is needed.

### Workflow A: Runtime CDP Injection

Use when:
- the site is already open on Android Chrome
- the change is temporary/debug-only
- testing CSS overlays, console instrumentation, camera logging, barcode overlays, permission checks, or UI probes
- no committed source change is needed yet

Prefer:
- `adb forward tcp:9222 localabstract:chrome_devtools_remote`
- `chromium.connectOverCDP('http://127.0.0.1:9222')`
- `page.evaluate()`
- `page.addStyleTag()`
- `page.addScriptTag()`

Do not start a local server for this workflow.

### Workflow B: Local Source Patch + Phone Refresh

Use when:
- editing real project files
- testing actual source patches
- verifying committed behavior
- checking scanner/camera fixes after source edits

Prefer:
- serve the project locally
- make the Android device access the local server
- refresh the already-open mobile Chrome tab
- preserve permissions/session where possible

Do not rely only on runtime-injected code for final validation.

### Workflow C: Desktop/CI Playwright

Use when:
- running deterministic tests
- testing non-camera UI logic
- validating static pages
- checking regressions without real camera behavior

Do not treat this as sufficient for final barcode/camera validation.

---

## Hot Reload Means Serve + Refresh

When the user says:

- "hot reload"
- "update directly"
- "upload app.js to phone browser"
- "test patches on attached Android phone"
- "static-demo is open on Android Chrome"

do **not** ask what bug to fix first.

First establish the hot reload loop.

### Expected Behavior

1. Confirm adb device is connected.
2. Serve `static-demo/` locally.
3. Make Android Chrome load the local served URL.
4. Use `adb reverse` if the phone is attached through Windows.
5. After source edits, refresh the Android Chrome tab.
6. Only then investigate camera/scanner bugs.

The user is asking for infrastructure, not diagnosis.

### Preferred Windows + WSL Flow

Resolve `ADB_EXE` using:

- `tools/wsl-find-adb.sh`
- [Safe Discovery of Windows Executables from WSL](#safe-discovery-of-windows-executables-from-wsl)

```bash
ADB_EXE="$(tools/wsl-find-adb.sh)"
"$ADB_EXE" devices
"$ADB_EXE" reverse tcp:8080 tcp:8080
```

The URL depends on which directory is being served:

| Served directory | Android URL |
|---|---|
| repo root (e.g. `C:\repo\`) | `http://localhost:8080/static-demo/` |
| `static-demo/` directly | `http://localhost:8080/` |

Set a variable early to avoid confusion:

```bash
SERVE_ROOT="$(wslpath -w "$PWD")"       # repo root → /static-demo/
# or
SERVE_ROOT="$(wslpath -w "$PWD/static-demo")"  # static-demo only → /
```

Serve from Windows when using Windows adb:

```bash
powershell.exe -NoProfile -Command \
  "Start-Process -WindowStyle Hidden -FilePath python -ArgumentList '-m http.server 8080 -d \"$SERVE_ROOT\"'"
```

Open on Android:

```bash
"$ADB_EXE" shell am start \
  -a android.intent.action.VIEW \
  -d "http://localhost:8080/static-demo/" \
  com.android.chrome
```

After editing `static-demo/app.js`, refresh:

```bash
"$ADB_EXE" shell input keyevent KEYCODE_F5
```

or reopen the same URL:

```bash
"$ADB_EXE" shell am start \
  -a android.intent.action.VIEW \
  -d "http://localhost:8080/static-demo/" \
  com.android.chrome
```

### Rules

- Do not block on CDP.
- Do not ask for bug details before the hot reload loop works.
- Do not try to push `app.js` into Chrome directly; browsers load files from URLs. The correct model is:

  local source file → local static server → Android localhost via adb reverse → browser refresh.

### Fastest Manual Refresh Fallback

If automation becomes flaky:

1. Edit files
2. Save
3. Tap refresh in Android Chrome manually

Manual refresh is acceptable during rapid camera/scanner iteration.

Do not block debugging on perfect automation.

## Mobile Hot Reload / Direct Patch Testing

Goal:
Edit local files and verify changes on the attached Android device with the shortest possible loop.

## Low-Question Hot Reload Mode

When the user asks for hot reload or direct patch testing, minimize questions.

Assume the user wants:

- the Android device refreshed
- the local server or reverse state verified
- source edits reflected on the phone
- current state synced
- camera or scanner debugging to continue

Do not ask what to change unless a source edit is impossible without clarification.

## Continuous Hot Reload Iteration Mode

Once the hot reload loop is established successfully:

- do not repeatedly re-summarize infrastructure state
- do not repeatedly ask what workflow the user wants
- do not repeatedly ask broad planning questions

Assume the workflow remains active until:

- `adb` disconnects
- server fails
- user explicitly changes workflow
- repository state changes substantially

### Preferred Iteration Loop

After hot reload setup:

1. inspect relevant changed files
2. apply requested patch
3. refresh Android Chrome
4. continue debugging/testing
5. report concise results

Avoid repeatedly restating:

- adb device ID
- server port
- `adb reverse` state
- localhost URL
- WSL topology

unless something breaks.

### Interpret Short User Commands Operationally

| User input | Expected behavior |
| --- | --- |
| `sync` | refresh or reopen the Android page |
| `refresh` | refresh Android Chrome |
| `again` | retry previous patch or test flow |
| `still broken` | inspect likely affected files and continue debugging |
| `camera still bad` | continue camera instrumentation or debugging |
| `patch it` | edit likely relevant files directly |
| `css` | inspect or edit relevant CSS files |
| `app.js` | inspect or edit relevant JavaScript logic |
| `same issue` | continue previous investigation context |

Do not require the user to restate:

- which files are active
- that Android hot reload is still desired
- that the phone is connected
- that Chrome is already open

unless evidence suggests otherwise.

### Minimize Conversational Reset

Avoid responses like:

- "What would you like to change?"
- "What issue are you seeing?"
- "How would you like to proceed?"

when already inside an active debugging loop.

Prefer:

- inspecting likely relevant files
- applying small reversible patches
- refreshing Android Chrome
- reporting concise observations

### Preferred Reporting Style

Good:

```text
Patched scanner overlay sizing in static-demo/app.css.
Refreshed Android Chrome.
Camera stream now fills viewport correctly on rotation.
```

Bad:

```text
Hot reload loop is active.
ADB device connected.
Server running.
What would you like me to do next?
```

### Treat Infrastructure as Persistent Session State

Once verified:

- assume `adb reverse` remains active
- assume server remains active
- assume Chrome remains open

Only revalidate infrastructure if:

- refresh fails
- `adb` commands fail
- page becomes unreachable
- user explicitly requests restart or reset

### Expected Behavior After Setup

Once hot reload is established, the agent should:

1. Keep `ADB_EXE` resolved.
2. Keep `adb reverse tcp:8080 tcp:8080` active.
3. Keep or restart the local Windows-hosted static server if needed.
4. Reopen or refresh Android Chrome with:

```bash
"$ADB_EXE" shell am start \
  -a android.intent.action.VIEW \
  -d "http://localhost:8080/static-demo/" \
  com.android.chrome
```

5. Continue editing and testing without asking broad workflow questions.

### Verification Behavior

From WSL, `curl http://localhost:8080/...` may fail if the server is hosted on Windows. Do not treat that as proof the phone cannot reach it.

For Windows-hosted server verification from WSL, prefer:

```bash
powershell.exe -NoProfile -Command \
  "try { (Invoke-WebRequest -UseBasicParsing http://localhost:8080/static-demo/).StatusCode } catch { exit 1 }"
```

Also verify:

```bash
"$ADB_EXE" reverse --list
```

If the server is missing, restart it instead of asking.

### Scanner Startup Race Check

See also:

- `docs/android-camera-debugging.md`

If the camera error happens only on first load of `#/scanner`, check whether startup is triggering more than one route/render pass.

In `static-demo/app.js`, the scanner route calls `maybeStartScanner()` from `renderRoute()`. If `init()` or another startup path routes twice, Android Chrome can:

1. open the rear camera
2. immediately stop the stream
3. attempt a second startup while the first session is still unwinding

On real Android devices this can surface as a startup-only camera failure or flaky first-open behavior.

Preferred validation on a connected phone:

```bash
ADB_EXE="$(tools/wsl-find-adb.sh)"
"$ADB_EXE" logcat -c
"$ADB_EXE" shell am start \
  -a android.intent.action.VIEW \
  -d "http://localhost:8080/static-demo/#/scanner?mode=isbn" \
  com.android.chrome
sleep 8
"$ADB_EXE" logcat -d | rg "CameraService::connect call .*com.android.chrome"
```

For a clean startup, expect one Chrome camera connect call for the scanner open, not an immediate double-open caused by app startup churn.

### Question Policy

Avoid questions like:

- "What bug are you seeing?"
- "What do you want to change?"
- "Are you using Chrome DevTools?"
- "What is your workflow?"

Prefer action:

- refresh
- reopen URL
- verify reverse
- restart server
- inspect active files
- make a small reversible patch when requested

Only ask when:

- multiple destructive choices exist
- the requested code change is ambiguous
- the device is disconnected
- a required tool is genuinely missing after documented discovery attempts

Important:
This is different from CDP runtime injection.

Preferred order:

1. Detect host environment.
2. Confirm ADB device is connected.
3. Decide whether the server should run on Windows or WSL.
4. Prefer the simplest reachable localhost path for the Android device.
5. Open the local URL on Android Chrome.
6. Edit source files.
7. Refresh the existing tab.
8. Preserve camera permissions and browser state.

### Recommended Windows + WSL Strategy

When the phone is attached to Windows and the repository is edited from WSL:

Prefer serving from Windows if using `adb reverse`, because:

```bash
adb reverse tcp:<device-port> tcp:<host-port>
```

forwards Android `localhost:<device-port>` to the Windows host adb server, not automatically to the WSL network namespace.

If serving from WSL, do not assume Android can reach the WSL IP directly.

Avoid getting stuck in Windows portproxy unless explicitly needed, because `netsh interface portproxy` requires administrator privileges.

### Preferred Simple Path

If Windows Python is available:

1. Resolve `ADB_EXE` using `tools/wsl-find-adb.sh`:

```bash
ADB_EXE="$(tools/wsl-find-adb.sh)"
```

2. Convert repo path from WSL to Windows path:

```bash
REPO_WIN=$(wslpath -w "$PWD")
```

3. Start a Windows-hosted static server from WSL:

```bash
powershell.exe -NoProfile -Command \
  "Start-Process -WindowStyle Hidden -FilePath python -ArgumentList '-m http.server 8080 -d \"$REPO_WIN\"'"
```

If you need to serve `static-demo/` directly instead of the repo root, convert that directory explicitly with `wslpath -w` and reuse the same pattern.

4. Reverse the port to the Android device:

```bash
"$ADB_EXE" reverse tcp:8080 tcp:8080
```

5. Open the local site on Android Chrome:

```bash
"$ADB_EXE" shell am start -a android.intent.action.VIEW -d "http://localhost:8080/static-demo/" com.android.chrome
```

6. After edits, refresh the existing tab instead of relaunching Chrome when possible.

### If CDP Works

Use CDP to refresh the tab:

```js
await page.reload({ waitUntil: 'domcontentloaded' });
```

### If CDP Does Not Work

Use ADB key events as fallback:

```bash
"$ADB_EXE" shell input keyevent KEYCODE_F5
```

or reopen the same local URL:

```bash
"$ADB_EXE" shell am start -a android.intent.action.VIEW -d "http://localhost:8080/static-demo/" com.android.chrome
```

### Camera Note

`http://localhost` on the Android device is acceptable for camera testing because localhost is treated as a secure context by modern browsers.

Do not switch to arbitrary LAN HTTP URLs for camera testing unless secure-context behavior is verified.

### Avoid

- mixing Bash and PowerShell syntax
- assuming WSL localhost is Windows localhost
- assuming Android can reach the WSL IP
- using `netsh interface portproxy` without noting it requires admin
- starting duplicate adb servers
- restarting Chrome repeatedly
- confusing runtime CDP injection with source hot reload

---

## Prefer Convergence Over Exhaustive Infrastructure Setup

When the goal is rapid mobile patch testing:

Prefer:
- the shortest working path
- manual refresh over blocked automation
- partial success over infrastructure perfection
- immediate feedback loops

Avoid:
- extended debugging of auxiliary tooling
- repeated retries of broken CDP setup
- complex Windows networking setup unless necessary
- premature automation

---

## Agent Decision Checklist

When asked to test patches on an attached Android phone:

1. Is this a temporary runtime debug change?
   - Yes: use CDP injection.
   - No: edit source and serve locally.

2. Is the phone attached to Windows while commands run in WSL?
   - Yes: prefer Windows `adb.exe`.
   - Yes: prefer Windows-hosted local server for `adb reverse`.

3. Does CDP respond at `http://127.0.0.1:9222/json/version`?
   - Yes: use Playwright CDP for refresh/instrumentation.
   - No: do not get stuck; use local server + adb reverse + manual/ADB refresh fallback.

4. Is camera/scanner behavior being tested?
   - Yes: final validation must be on real Android Chrome with actual camera stream.

5. Are source files changed?
   - Yes: refresh local served page.
   - No: runtime injection is enough for exploratory debugging.

---

## Do Not Spin on Broken CDP

If CDP forwarding fails after:
- confirming adb device is connected
- confirming Chrome is running
- setting `adb forward tcp:9222 localabstract:chrome_devtools_remote`
- checking `/json/version`

then stop retrying CDP setup and switch to the local-server + `adb reverse` workflow.

CDP is useful but not mandatory for hot reload/source patch testing.

---

## Runtime Environment Detection

### Supported Hosts

- WSL2
- native Linux
- macOS
- Windows host

### Detecting WSL

```bash
# Check kernel version for Microsoft
uname -r | grep -i microsoft

# Check for WSL environment variable
echo "$WSL_DISTRO_NAME"

# Check /proc/version
cat /proc/version | grep -i microsoft
```

### Environment Inspection

Before assuming any particular tool availability, inspect:

```bash
# Available adb binaries
which adb 2>/dev/null; which adb.exe 2>/dev/null

# PATH includes Windows tools (WSL)
echo "$PATH" | grep -i "/mnt/c"

# Mounted drives (WSL)
ls /mnt/c/ 2>/dev/null
```

Adapt automatically instead of assuming a fixed environment.

---

## WSL Behavior

In WSL, Android USB connectivity is typically handled by the Windows host.

### Preferred Approach

- **Do not** start a duplicate Linux adb server
- **Do not** assume Linux USB access works
- Reuse the existing Windows adb server

### Connecting to Windows adb Server

This is the Linux `adb` client path. Prefer the `ADB_EXE="$(tools/wsl-find-adb.sh)"` flow elsewhere in this guide unless you intentionally need the Linux client to talk to the Windows adb server.

```bash
# Determine Windows host IP
HOST_IP=$(ip route | grep default | awk '{print $3}')

# Point Linux adb at the Windows adb server
export ADB_SERVER_SOCKET=tcp:${HOST_IP}:5037
adb devices
```

### Using Windows adb.exe Directly

Use the canonical helper instead of repeating discovery logic inline:

```bash
ADB_EXE="$(tools/wsl-find-adb.sh)"
"$ADB_EXE" devices
```

See [Safe Discovery of Windows Executables from WSL](#safe-discovery-of-windows-executables-from-wsl) for the canonical search order, normalization, and failure behavior.

### Critical Rules

- Never automatically start duplicate adb servers
- Prefer reusing the existing adb server on the host
- Prefer reusing an existing Chrome session and login state
- If both `adb` and `adb.exe` are available, prefer `adb.exe` on WSL unless explicitly configured for Linux USB

---

## WSL ↔ Windows Path Conversion Guidance

When working across WSL and Windows tools, avoid assuming paths are directly interchangeable.

ADB, Playwright helpers, screenshots, logs, and temporary artifacts may cross:

- Bash
- PowerShell
- Windows executables
- WSL-mounted filesystems

Prefer automatic path normalization.

### Recommended Rules

- Windows executables (`adb.exe`, `chrome.exe`, etc.) may require Windows-style paths
- Linux/WSL tools generally require POSIX paths
- Always convert paths explicitly when crossing environments
- Avoid manual string replacement when reliable conversion tools exist

### WSL → Windows Path Conversion

Preferred tool:

```bash
wslpath -w /mnt/c/Users/test/file.txt
```

Example output:

```text
C:\Users\test\file.txt
```

Useful when:

- passing files to `adb.exe`
- invoking PowerShell from WSL
- launching Windows Chrome from WSL
- saving screenshots/videos for Windows-native tools

Example:

```bash
ADB_EXE="$(tools/wsl-find-adb.sh)"
WIN_PATH=$(wslpath -w "$PWD/debug-screenshot.png")
"$ADB_EXE" push "$WIN_PATH" /sdcard/Download/
```

### Windows → WSL Path Conversion

Preferred tool:

```bash
wslpath -u 'C:\Users\test\file.txt'
```

Example output:

```text
/mnt/c/Users/test/file.txt
```

Useful when:

- processing Windows-generated artifacts in Bash
- using Linux tooling on Windows-created files
- sharing Playwright screenshots/logs between environments

Example:

```bash
WSL_PATH=$(wslpath -u 'C:\temp\barcode-frame.png')
file "$WSL_PATH"
```

### Safe Discovery of Windows Executables from WSL

Use `tools/wsl-find-adb.sh` as the canonical WSL helper for resolving the Windows `adb.exe` path.

If the executable bit is missing:

```bash
chmod +x tools/wsl-find-adb.sh
```

```bash
ADB_EXE="$(tools/wsl-find-adb.sh)"
"$ADB_EXE" devices
```

Avoid hardcoding:

- Android SDK paths
- WinGet package directories
- user profile paths

Do not ask the user where `adb.exe` is until after checking common Windows paths. The helper script uses a multi-strategy discovery optimized for low WSL startup latency: cache first, deterministic probes next, recursive filesystem search only as a final fallback.

Key behaviors:

- Keep a persistent cache at `${XDG_CACHE_HOME:-$HOME/.cache}/letbooks-adb-path` and reuse it when the cached executable still exists.
- **Do not** ask the user where adb is until after checking common Windows paths.
- **Do not** run a broad `find /mnt/c` unless necessary; it can be slow on WSL-mounted Windows filesystems.
- Prefer deterministic path checks and shell globbing under known WinGet and Android SDK locations.
- Strip CRLF from Windows command output before path handling.
- If adb was installed by WinGet, expect it under
  `AppData/Local/Microsoft/WinGet/Packages/.../platform-tools/adb.exe`.
- Common Android SDK patterns include `AppData/Local/Android/Sdk/platform-tools/adb.exe` and `Android/Sdk/platform-tools/adb.exe`.
- Convert Windows-style paths to WSL paths automatically with `wslpath -u`.
- Return a nonzero exit code with a clear error message if discovery fails.
- Once found, reuse the resolved `ADB_EXE` variable for all later commands.
- Set `LETBOOKS_DEBUG_ADB_DISCOVERY=1` to print end-to-end discovery timing for slow-environment diagnosis.

Search order explained:

| Attempt | Method | Covers |
|---|---|---|
| 1 | `ADB_EXE` environment variable | Explicit per-session override |
| 2 | Persistent cache file | Near-instant repeated execution |
| 3 | `Get-Command adb.exe` via PowerShell | Windows PATH entries |
| 4 | `where adb.exe` via cmd.exe | Fallback PATH query |
| 5 | Deterministic WinGet glob | Per-user WinGet installs |
| 6 | Deterministic Android SDK glob | Per-user and system-wide SDK installs |
| 7 | Recursive `find` fallback | Last-resort filesystem search |

Windows-style paths returned by PowerShell or `cmd.exe` are normalized automatically by the helper.

The recursive fallback intentionally runs last because traversing `/mnt/c/Users` can be noticeably slow from WSL.

### Quoting Rules

Paths may contain:

- spaces
- parentheses
- Unicode characters

Always quote paths.

Preferred:

```bash
"$ADB_EXE" devices
```

Avoid:

```bash
$ADB_EXE devices
```

### Common Cross-Environment Pitfalls

#### CRLF Line Endings

Windows commands may return carriage returns (`\r`).

`tools/wsl-find-adb.sh` already strips these for adb discovery.

Normalize when needed:

```bash
tr -d '\r'
```

Example:

```bash
ADB_WIN=$(cmd.exe /c where adb.exe | tr -d '\r')
```

#### Backslash Escaping

Avoid manually escaping Windows paths in Bash.

Prefer conversion through:

- `wslpath`
- quoted variables

#### Relative Paths

Avoid passing relative paths across environments.

Prefer:

- absolute normalized paths
- runtime-generated converted paths

### Recommended Strategy

When invoking Windows tools from WSL:

1. Discover executable dynamically
2. Normalize path using `wslpath`
3. Quote paths
4. Strip CRLF if needed
5. Reuse resolved executable paths during the session
6. Let the helper's persistent cache remove repeated startup cost

Avoid:

- hardcoded SDK directories
- assumptions about usernames
- assumptions about WinGet install locations
- manual slash replacement logic

---

## Windows Setup

### Recommended Installation

```powershell
winget install -e --id Google.PlatformTools
```

### Verification

```powershell
adb devices
```

### Notes

- Avoid assuming fixed SDK install paths like `C:\Android\Sdk\platform-tools\`
- Prefer PATH-based adb discovery after `winget` install
- Restart the terminal after installation if `adb` is not immediately found

---

## Android Developer Mode Setup

### Enabling Developer Options

1. Open **Settings** > **About phone**
2. Tap **Build number** 7 times
3. Enter your PIN if prompted
4. **Developer options** now appears in Settings

### Enabling USB Debugging

1. Open **Settings** > **System** > **Developer options**
2. Toggle **USB debugging** on
3. Confirm the dialog

### Authorizing adb

When you first connect via USB:

1. The device shows: **"Allow USB debugging?"**
2. Check **"Always allow from this computer"**
3. Tap **Allow**

### Handling "unauthorized" State

```bash
# If device shows as "unauthorized":
adb devices
# List of devices attached
# <serial>    unauthorized

# Revoke USB debugging authorizations on device if needed:
# Settings > Developer options > Revoke USB debugging authorizations
# Then reconnect and re-authorize
```

### Verify Connection

```bash
adb devices -l
# Should show:
# <serial>    device <model-info>
```

---

## Chrome Remote Debugging

### Forward Chrome DevTools Port

```bash
adb forward tcp:9222 localabstract:chrome_devtools_remote
```

### Verify Forwarding

```bash
curl http://127.0.0.1:9222/json/version
```

### Open Chrome on Device (if not already running)

```bash
adb shell am start -n com.google.chrome/com.google.android.apps.chrome.Main
```

### Connect with Playwright via CDP

```js
const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
```

### Why CDP Attachment Is Preferred

| Approach | Issues |
|---|---|
| `chromium.launch()` | Requires new browser instance, loses session state, loses camera permissions |
| `chromium.connectOverCDP()` | Preserves session state, preserves camera permissions, avoids repeated launches |

CDP attachment:

- preserves session state (login, navigation history)
- preserves camera permissions
- avoids repeated browser launches
- speeds up the debugging loop significantly
- allows the human to interact with the device while Playwright observes

### Common CDP Patterns

```js
// Attach to all existing pages
const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const context = browser.contexts()[0];
const page = context.pages()[0];

// Or target a specific page by URL
const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
const context = browser.contexts()[0];
const page = context.pages().find(p => p.url().includes('letbooks'));
```

---

## Useful Android Chrome Flags

Sometimes useful during debugging:

```bash
adb shell am start \
  -n com.android.chrome/com.google.android.apps.chrome.Main \
  --esa args '--disable-fre,--disable-background-timer-throttling'
```

Useful flags:

| Flag | Effect |
|---|---|
| `--disable-fre` | Skips the First Run Experience (welcome screens, sign-in prompts) |
| `--disable-background-timer-throttling` | Prevents Chrome from throttling timers in background tabs |
| `--disable-renderer-backgrounding` | Keeps renderer process active even when tab is backgrounded |
| `--disable-features=Translate` | Disables the Translate UI banner |

Not always needed, but valuable during extended debugging sessions where Chrome's normal background behavior would interfere.

---

## Playwright Mobile Debugging Philosophy

### Optimization Goals

Ordered by priority:

1. **shortest edit/test loop** — minimize time from code change to verification
2. **runtime instrumentation** — prefer `page.evaluate()` over code changes
3. **preserving browser state** — avoid unnecessary relaunches
4. **live-device debugging** — real hardware over emulation

### Preferred Techniques

| Technique | Use When |
|---|---|
| `page.evaluate()` | Injecting JS to read/modify app state |
| `page.addStyleTag()` | Temporarily overlaying debug visuals |
| `page.addScriptTag()` | Adding debug-only instrumentation |
| `locator.waitFor()` | Waiting for specific elements |
| `scrollIntoViewIfNeeded()` | Bringing elements into view before interaction |
| `PWDEBUG=1` | Stepping through Playwright interactions |

```js
// Example: runtime debug overlay
await page.addStyleTag({ content: `
  .debug-highlight { outline: 3px solid red !important; }
`});
await page.evaluate(() => {
  document.querySelectorAll('button').forEach(el => el.classList.add('debug-highlight'));
});
```

### What to Avoid

- arbitrary `page.waitForTimeout()` — use explicit locator waits instead
- unnecessary rebuilds — debug at runtime when possible
- unnecessary browser relaunches — prefer CDP reconnect
- permanent debug modifications in committed code

---

## Runtime Debug Helpers

### Touch Target Visualization

```js
await page.addStyleTag({ content: `
  *:active { background: rgba(255,0,0,0.1) !important; }
  button, a, input, select, textarea { outline: 1px dotted rgba(0,0,255,0.3) !important; }
`});
```

### Z-Index Visualization

```js
await page.evaluate(() => {
  document.querySelectorAll('*').forEach(el => {
    const z = getComputedStyle(el).zIndex;
    if (z && z !== 'auto') {
      el.setAttribute('data-z', z);
      el.style.outline = `2px solid hsl(${parseInt(z) * 30}, 70%, 50%)`;
    }
  });
});
```

### Viewport Rulers

```js
await page.addStyleTag({ content: `
  .vp-ruler { position: fixed; background: rgba(255,0,0,0.3); z-index: 99999; pointer-events: none; }
  .vp-ruler-h { top: 0; left: 0; right: 0; height: 1px; }
  .vp-ruler-v { top: 0; left: 0; bottom: 0; width: 1px; }
`});
await page.addScriptTag({ content: `
  document.body.insertAdjacentHTML('beforeend',
    '<div class="vp-ruler vp-ruler-h"></div><div class="vp-ruler vp-ruler-v"></div>');
`});
```

### Rerender Highlighting

```js
await page.evaluate(() => {
  const orig = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(...args) {
    orig.apply(this, args);
    if (args[0] !== 'data-render') {
      this.setAttribute('data-render', Date.now());
    }
  };
});
```

### Console Mirroring

```js
page.on('console', msg => {
  console.log(`[DEVICE] ${msg.type()}: ${msg.text()}`);
});
page.on('pageerror', err => {
  console.error(`[DEVICE ERROR] ${err.message}`);
});
```

### Network Logging

```js
page.on('request', req => {
  console.log(`[NET] ${req.method()} ${req.url()}`);
});
page.on('response', res => {
  console.log(`[NET] ${res.status()} ${res.url()}`);
});
```

### Failed Locator Screenshots

```js
async function debugLocator(page, locator, name) {
  try {
    await locator.waitFor({ timeout: 5000 });
    return true;
  } catch {
    await page.screenshot({ path: `debug-${name}-${Date.now()}.png`, fullPage: true });
    console.error(`Locator "${name}" not found. Screenshot saved.`);
    return false;
  }
}
```

### Debug Labels (Temporary DOM Annotations)

```js
await page.evaluate(() => {
  document.querySelectorAll('[data-testid]').forEach(el => {
    el.insertAdjacentHTML('beforeend',
      `<span style="position:absolute;top:0;left:0;font-size:10px;background:yellow;z-index:9999">${el.getAttribute('data-testid')}</span>`);
  });
});
```

---

## Barcode / QR Debugging

The main focus of real-device debugging is validating actual mobile camera behavior.

### Key Considerations

| Factor | Impact |
|---|---|
| Autofocus delay | Initial frames may be blurry; wait for `focusMode: "continuous"` to stabilize |
| Motion blur | Hand movement during capture degrades decode |
| Glare/reflections | Angled lighting can obscure barcodes |
| Low light | Reduced contrast affects decode confidence |
| Orientation changes | Rotation may reset camera stream |
| Zoom behavior | Digital zoom reduces resolution; stay within optical range |
| Browser camera inconsistencies | Different Chrome versions handle `getCapabilities()` differently |
| Camera permissions | Must be granted and not revoked |
| Device pixel density | Affects how scan regions map to physical pixels |

**Desktop emulation is not sufficient for final validation** of camera/barcode behavior.

---

## Camera Handling

### Requirements

- Explicit permission failure handling
- Waiting for stream readiness
- Waiting for autofocus stabilization
- Avoiding flaky timing assumptions

### Permission Debugging

```js
// Check current permission state
const state = await page.evaluate(async () => {
  try {
    const result = await navigator.permissions.query({ name: 'camera' });
    return result.state; // 'granted', 'denied', 'prompt'
  } catch {
    return 'permissions API not available';
  }
});
console.log('Camera permission state:', state);
```

### Stream Readiness Monitoring

```js
await page.evaluate(() => {
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = async (constraints) => {
    console.log('[CAMERA] getUserMedia called with:', JSON.stringify(constraints));
    const stream = await origGetUserMedia(constraints);
    const track = stream.getVideoTracks()[0];
    console.log('[CAMERA] Track label:', track.label);
    console.log('[CAMERA] Track settings:', JSON.stringify(track.getSettings()));
    console.log('[CAMERA] Track capabilities:', JSON.stringify(track.getCapabilities()));
    return stream;
  };
});
```

### HTTPS Requirement

Modern mobile browsers generally require secure contexts for camera access.

Preferred origins:
- `https://`
- `http://localhost`
- local HTTPS dev certificates

Camera APIs may fail or behave inconsistently on:
- plain HTTP origins
- mismatched certificates
- embedded browsers/webviews with restricted permissions

Always verify:
- `navigator.mediaDevices`
- `isSecureContext`
- browser permission state

### Camera Selection

Android devices often have multiple cameras, and the default selection may not be the rear camera.

Do not assume:
- first camera in `enumerateDevices()` is the rear camera
- an environment-facing camera exists
- labels are populated before permission is granted

Prefer inspecting at runtime:
- `navigator.mediaDevices.enumerateDevices()`
- actual selected track settings via `track.getSettings()`
- `facingMode` constraint: `{ ideal: "environment" }`

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const videoInputs = devices.filter(d => d.kind === 'videoinput');
console.log('Available cameras:', videoInputs.map(d => ({
  label: d.label,
  deviceId: d.deviceId,
  groupId: d.groupId
})));
```

### Viewport Stability During Camera Activation

Camera activation may trigger:
- viewport resize
- virtual keyboard interactions
- orientation recalculation
- safe-area inset changes

Avoid assuming viewport dimensions remain stable after camera initialization. Re-check layout after stream start.

### Thermal Throttling and Battery Concerns

Long-running barcode scanning sessions may be affected by:
- thermal throttling (CPU/GPU frequency reduction)
- battery saver mode (reduced frame processing)
- vendor background restrictions (aggressive OEM power management)

Prefer:
- charging the device during testing
- disabling battery optimizations for Chrome
- keeping the screen awake during debugging sessions

---

## Barcode Debug Instrumentation

### Overlays and Logging

Monitor these properties at runtime:

- detected barcode bounds
- scan region
- decode confidence
- frame processing rate
- selected camera
- camera resolution
- stream readiness

### Logging Decode Attempts

```js
await page.evaluate(() => {
  // Intercept scanner library events
  document.addEventListener('barcodeDetected', (e) => {
    console.log('[BARCODE] Detected:', {
      value: e.detail.value,
      format: e.detail.format,
      bounds: e.detail.bounds,
      confidence: e.detail.confidence,
      timestamp: Date.now()
    });
  });
  document.addEventListener('barcodeError', (e) => {
    console.error('[BARCODE] Error:', e.detail.error, e.detail.message);
  });
});
```

### What to Log

- decode attempts
- decode failures with error details
- browser console errors
- permission state before camera access
- scan success/error transitions

### On Failure

- capture screenshots of the current viewport
- capture video when useful
- preserve failing frames where possible for later analysis
- when possible, capture the raw camera frame that failed decode
- save crop regions around attempted barcode detection
- log timestamp and camera settings alongside failure artifacts

This frame-level preservation becomes invaluable when debugging decode regressions across device models or Chrome versions.

```js
// Screenshot on barcode failure
page.on('console', async (msg) => {
  if (msg.text().includes('[BARCODE] Error')) {
    await page.screenshot({ path: `barcode-fail-${Date.now()}.png` });
    console.log('Camera settings at failure:', await page.evaluate(() => {
      const track = document.querySelector('video')?.srcObject?.getVideoTracks?.()[0];
      return track ? track.getSettings() : null;
    }));
  }
});
```

---

## Testing Strategy

### Supported Approaches

| Method | Use Case |
|---|---|
| Generated QR codes | Controlled decode testing (e.g., box QR codes) |
| Static barcode images | ISBN decode testing via file upload |
| Prerecorded streams | Regression/performance testing |
| Real-device scans | Final validation only |

### Preferred Assertions

- **Avoid** arbitrary `page.waitForTimeout()` calls
- **Use** explicit locator waits (`waitFor()`, `waitForSelector()`)
- **Verify** scan feedback: the UI should confirm detection (highlight, sound, navigation)
- **Use** retry-safe logic for flaky camera operations

```js
// Preferred: wait for scan result feedback
await page.locator('.scan-success-indicator').waitFor({ timeout: 15000 });

// Not preferred: arbitrary sleep
await page.waitForTimeout(5000); // avoid
```

### Final Validation

Must happen on:

- real Android hardware
- Android Chrome browser
- actual camera streams
- representative lighting conditions
- representative barcode/QR quality (printed, not just screen-displayed)

---

## Command Generation Rules

### Shell Syntax

| Platform | Shell |
|---|---|
| Linux | Bash |
| macOS | Bash |
| WSL | Bash |
| Windows (native) | PowerShell |

**Never mix shell syntaxes.** When writing instructions for Windows, write PowerShell. When writing instructions for Linux/macOS/WSL, write Bash.

### Path Normalization

Automatically normalize paths for:

- Linux: `/path/to/file`
- macOS: `/path/to/file`
- Windows: `C:\path\to\file`
- WSL-mounted Windows paths: `/mnt/c/Users/...`

### Uncertainty Handling

When uncertain about the environment:

1. Inspect environment first before running commands
2. Check adb availability first
3. Adapt automatically instead of guessing
4. If environment cannot be determined, prefer the safest fallback

---

## Related Documentation

- `static-demo/README.md` — static demo contributor tooling setup and Playwright workflow guidance
- Playwright documentation for `connectOverCDP` and mobile emulation APIs
- ADB documentation for advanced device management
