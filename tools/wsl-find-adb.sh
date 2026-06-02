#!/usr/bin/env bash
# Purpose:
# - Resolve the Windows `adb.exe` path from WSL and cache it for later runs.
#
# Why:
# - Real-device Android debugging is a first-class workflow in this repository, and manual
#   ADB discovery from WSL is repetitive and fragile.
#
# Detects / Enforces:
# - Enforces a deterministic ADB discovery order with a cached fast path.
#
# Limitations:
# - WSL/Windows-specific helper.
#
# Related:
# - tools/README.md
# - tools/android-cdp-check.sh
set -euo pipefail

CACHE_FILE="${XDG_CACHE_HOME:-$HOME/.cache}/letbooks-adb-path"
DEBUG_DISCOVERY="${LETBOOKS_DEBUG_ADB_DISCOVERY:-0}"
START_TS=""
ADB_EXE="${ADB_EXE:-}"

if [ "$DEBUG_DISCOVERY" = "1" ]; then
  START_TS="$(date +%s%3N 2>/dev/null || true)"
fi

finish_debug() {
  if [ "$DEBUG_DISCOVERY" != "1" ] || [ -z "$START_TS" ]; then
    return
  fi

  local end_ts duration
  end_ts="$(date +%s%3N 2>/dev/null || true)"
  [ -n "$end_ts" ] || return
  duration="$((end_ts - START_TS))"
  echo "[adb-discovery] completed in ${duration}ms" >&2
}

normalize_adb_path() {
  local candidate
  candidate="${1:-}"
  candidate="${candidate%$'\r'}"

  case "$candidate" in
    C:\\*)
      # PowerShell and cmd may return Windows-native paths. Normalize them immediately so every
      # later check can treat the result as a regular executable path inside WSL.
      candidate="$(wslpath -u "$candidate")"
      ;;
  esac

  printf '%s\n' "$candidate"
}

emit_adb_path() {
  local candidate
  candidate="$(normalize_adb_path "${1:-}")"

  if [ -z "$candidate" ] || [ ! -x "$candidate" ]; then
    return 1
  fi

  ADB_EXE="$candidate"
  # Cache the successful path because Windows-side discovery can be expensive under WSL and is
  # not something contributors should pay on every debug loop.
  mkdir -p "$(dirname "$CACHE_FILE")"
  printf '%s\n' "$ADB_EXE" > "$CACHE_FILE"
  echo "$ADB_EXE"
  finish_debug
  exit 0
}

if [ -n "${ADB_EXE:-}" ] && [ -x "$ADB_EXE" ]; then
  echo "$ADB_EXE"
  finish_debug
  exit 0
fi

if [ -f "$CACHE_FILE" ]; then
  CACHED=""
  read -r CACHED < "$CACHE_FILE" || true
  CACHED="$(normalize_adb_path "$CACHED")"
  if [ -x "$CACHED" ]; then
    echo "$CACHED"
    finish_debug
    exit 0
  fi
fi

# Discovery order favors cheap and user-controlled paths first, then progressively more
# expensive fallbacks. The final filesystem scan is intentionally last because it can be
# slow on larger Windows installations.
POWERSHELL_ADB="$({
  powershell.exe -NoProfile -Command "(Get-Command adb.exe -ErrorAction SilentlyContinue).Source" 2>/dev/null
} | tr -d '\r')"
emit_adb_path "$POWERSHELL_ADB" || true

while IFS= read -r candidate; do
  emit_adb_path "$candidate" || true
done < <(cmd.exe /c where adb.exe 2>/dev/null | tr -d '\r')

for p in /mnt/c/Users/*/AppData/Local/Microsoft/WinGet/Packages/Google.PlatformTools*/platform-tools/adb.exe; do
  emit_adb_path "$p" || true
done

for p in \
  /mnt/c/Users/*/AppData/Local/Android/Sdk/platform-tools/adb.exe \
  /mnt/c/Android/Sdk/platform-tools/adb.exe
do
  emit_adb_path "$p" || true
done

# Recursive filesystem search is expensive on WSL-mounted Windows filesystems and can dominate
# the edit/test loop. Use only as a final fallback after all curated locations fail.
while IFS= read -r candidate; do
  emit_adb_path "$candidate" || true
done < <(find /mnt/c/Users -path '*/platform-tools/adb.exe' -type f -print -quit 2>/dev/null)

while IFS= read -r candidate; do
  emit_adb_path "$candidate" || true
done < <(find /mnt/c/Android -path '*/platform-tools/adb.exe' -type f -print -quit 2>/dev/null)

if [ -z "$ADB_EXE" ]; then
  finish_debug
  echo "adb.exe not found after checking PATH, cache, WinGet, Android SDK locations, and fallback filesystem search." >&2
  echo "Install on Windows with: winget install -e --id Google.PlatformTools" >&2
  exit 1
fi
