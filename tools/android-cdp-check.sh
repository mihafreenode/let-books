#!/usr/bin/env bash
# Purpose:
# - Smoke-test Android Chrome DevTools Protocol connectivity over ADB forwarding.
#
# Why:
# - Mobile debugging often fails before browser automation starts. This script isolates the
#   failure stage so contributors can fix device, socket, or forwarding issues directly.
#
# Detects / Enforces:
# - Enforces ADB discovery, device visibility, remote-debug socket presence, port forward,
#   and CDP JSON endpoint reachability.
#
# Limitations:
# - Shell- and environment-specific.
#
# Related:
# - tools/README.md
# - tools/wsl-find-adb.sh
# - tools/android-cdp-probe.mjs
set -euo pipefail

PASS_COUNT=0
FAIL_COUNT=0
ADB_EXE="${ADB_EXE:-}"
SOCKET_NAME=""
JSON_VERSION=""
JSON_LIST=""

pass() {
  PASS_COUNT=$((PASS_COUNT + 1))
  printf 'PASS: %s\n' "$1"
}

fail() {
  FAIL_COUNT=$((FAIL_COUNT + 1))
  printf 'FAIL: %s\n' "$1"
}

info() {
  printf 'INFO: %s\n' "$1"
}

next_action() {
  printf 'NEXT: %s\n' "$1"
}

resolve_adb() {
  if [ -n "$ADB_EXE" ] && command -v "$ADB_EXE" >/dev/null 2>&1; then
    printf '%s\n' "$ADB_EXE"
    return
  fi

  # Prefer the repo-specific WSL resolver when available because it understands the Windows/
  # WSL discovery edge cases this project hits during real-device debugging.
  if [ -x "tools/wsl-find-adb.sh" ] && [ -n "${WSL_DISTRO_NAME:-}" ]; then
    tools/wsl-find-adb.sh
    return
  fi

  if command -v adb >/dev/null 2>&1; then
    command -v adb
    return
  fi

  if command -v adb.exe >/dev/null 2>&1; then
    command -v adb.exe
    return
  fi

  return 1
}

curl_json() {
  local url="$1"
  if curl --silent --show-error --max-time 5 "$url" 2>/dev/null; then
    return 0
  fi

  # PowerShell fallback exists for WSL/Windows environments where localhost HTTP requests may be
  # easier to verify from the Windows side than from the Linux userspace toolchain.
  if [ -n "${WSL_DISTRO_NAME:-}" ] && command -v powershell.exe >/dev/null 2>&1; then
    powershell.exe -NoProfile -Command "try { Invoke-WebRequest -UseBasicParsing '$url' | Select-Object -ExpandProperty Content } catch { exit 1 }" 2>/dev/null | tr -d '\r'
    return $?
  fi

  return 1
}

ADB_EXE="$(resolve_adb || true)"
if [ -z "$ADB_EXE" ]; then
  fail "ADB executable not found"
  next_action "Set ADB_EXE explicitly, install platform-tools, or use tools/wsl-find-adb.sh from WSL"
  exit 1
fi
pass "ADB executable resolved: $ADB_EXE"

DEVICE_OUTPUT="$($ADB_EXE devices 2>&1 | tr -d '\r' || true)"
printf '%s\n' "$DEVICE_OUTPUT"
if printf '%s\n' "$DEVICE_OUTPUT" | grep -Eq '^[[:alnum:]:._-]+[[:space:]]+device$'; then
  pass "ADB device detected"
else
  fail "No authorized Android device detected"
  next_action "Reconnect USB, unlock phone, revoke USB debugging authorizations, and accept the prompt again"
fi

# Probe /proc/net/unix because the presence of the Chrome DevTools abstract socket is the most
# direct proof that Android Chrome is actually exposing a debuggable endpoint.
UNIX_SOCKETS="$($ADB_EXE shell cat /proc/net/unix 2>/dev/null || true)"
if printf '%s\n' "$UNIX_SOCKETS" | grep -q '@chrome_devtools_remote'; then
  SOCKET_NAME='chrome_devtools_remote'
elif printf '%s\n' "$UNIX_SOCKETS" | grep -q '@com.android.chrome_devtools_remote'; then
  SOCKET_NAME='com.android.chrome_devtools_remote'
fi

if [ -n "$SOCKET_NAME" ]; then
  pass "Chrome DevTools socket exposed: @$SOCKET_NAME"
else
  fail "Chrome DevTools socket not found"
  next_action "Open Google Chrome manually on the phone, load a page, keep the screen unlocked, then rerun this script"
fi

if [ -n "$SOCKET_NAME" ]; then
  if $ADB_EXE forward tcp:9222 "localabstract:$SOCKET_NAME" >/dev/null 2>&1; then
    pass "ADB forward configured: tcp:9222 -> localabstract:$SOCKET_NAME"
  else
    fail "ADB forward failed for socket @$SOCKET_NAME"
    next_action "Verify the socket name and ensure Chrome is still open on the device"
  fi
fi

JSON_VERSION="$(curl_json http://127.0.0.1:9222/json/version 2>/dev/null || true)"
if [ -n "$JSON_VERSION" ]; then
  pass "CDP /json/version responded"
  printf '%s\n' "$JSON_VERSION"
else
  fail "CDP /json/version did not respond on localhost:9222"
  next_action "If forwarding was configured, this is a forwarding or localhost endpoint issue; verify with curl and avoid debugging Chrome Inspect UI first"
fi

JSON_LIST="$(curl_json http://127.0.0.1:9222/json/list 2>/dev/null || true)"
if [ -n "$JSON_LIST" ] && printf '%s\n' "$JSON_LIST" | grep -q 'webSocketDebuggerUrl'; then
  pass "CDP /json/list returned open Chrome tabs"
  printf '%s\n' "$JSON_LIST"
else
  fail "CDP /json/list did not return debuggable tabs"
  next_action "Open a normal Chrome tab on the device and rerun the check"
fi

printf '\nSUMMARY: %s PASS, %s FAIL\n' "$PASS_COUNT" "$FAIL_COUNT"

if [ "$FAIL_COUNT" -eq 0 ]; then
  next_action "CDP is healthy. Prefer direct CDP clients such as Playwright connectOverCDP('http://127.0.0.1:9222'). Ignore chrome://inspect if it stays empty."
  exit 0
fi

if [ -z "$SOCKET_NAME" ]; then
  # Failure staging is explicit so an agent or human can stop guessing which layer broke:
  # Chrome socket exposure, ADB forwarding, localhost endpoint, or debuggable-tab discovery.
  next_action "Failure is at DevTools socket exposure inside Android Chrome."
elif [ -z "$JSON_VERSION" ]; then
  next_action "Failure is at ADB forwarding or localhost CDP endpoint access."
elif [ -z "$JSON_LIST" ]; then
  next_action "Failure is after CDP endpoint setup; confirm Chrome has open normal tabs."
else
  next_action "CDP endpoint is up; any remaining issue is likely in the client or Chrome Inspect discovery UI."
fi

exit 1
