#!/usr/bin/env python3

"""
Purpose:
- Validate that a contributor machine has the tooling required for docs generation,
  validation, and browser-based checks.

Why:
- Many documentation failures are environment failures first. This script makes missing or
  outdated dependencies visible before a contributor chases downstream errors.

Detects / Enforces:
- Enforces minimum versions and basic executability for the repo's external toolchain.

Limitations:
- Depends on local CLI names and local install shape.

Related:
- tools/README.md
- tools/generate_docs_content.py
- tools/validate_layout_structure.py
"""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent


@dataclass(frozen=True)
class ToolCheck:
    label: str
    command: list[str]
    minimum: tuple[int, ...] | None
    pattern: str
    required: bool = True
    help_text: str = ""


TOOL_CHECKS = [
    ToolCheck("Python", ["python3", "--version"], (3, 11), r"Python\s+(\d+(?:\.\d+)+)", True, "Install Python 3.11+ and ensure `python3` is on PATH."),
    ToolCheck("Node", ["node", "--version"], (22, 0), r"v?(\d+(?:\.\d+)+)", True, "Install Node.js 22+ and ensure `node` is on PATH."),
    ToolCheck("npm", ["npm", "--version"], (10, 0), r"(\d+(?:\.\d+)+)", True, "Install npm 10+ and ensure `npm` is on PATH."),
    ToolCheck("Git", ["git", "--version"], (2, 40), r"git version\s+(\d+(?:\.\d+)+)", True, "Install Git and ensure `git` is on PATH."),
    ToolCheck("Pandoc", ["pandoc", "--version"], (3, 0), r"pandoc\s+(\d+(?:\.\d+)+)", True, "Install Pandoc before generating documentation."),
    ToolCheck("Hunspell", ["hunspell", "-v"], (1, 7), r"Hunspell\s+(\d+(?:\.\d+)+)", True, "Install Hunspell for localization and spellcheck validation."),
    ToolCheck("jq", ["jq", "--version"], (1, 7), r"jq-(\d+(?:\.\d+)+)", True, "Install jq for JSON validation helpers."),
    ToolCheck("ImageMagick", ["magick", "--version"], (6, 9), r"ImageMagick\s+(\d+(?:\.\d+)+)", True, "Install ImageMagick 6.9+ and expose `magick` or `convert` on PATH."),
    ToolCheck("curl", ["curl", "--version"], None, r"curl\s+(\d+(?:\.\d+)+)", False, "Install curl for optional fetch/debug workflows."),
    ToolCheck("wget", ["wget", "--version"], None, r"GNU Wget\s+(\d+(?:\.\d+)+)", False, "Install wget for optional fetch/debug workflows."),
]


def parse_version(raw: str, pattern: str) -> tuple[int, ...] | None:
    match = re.search(pattern, raw, re.MULTILINE)
    if not match:
        return None
    return tuple(int(part) for part in match.group(1).split("."))


def version_text(version: tuple[int, ...]) -> str:
    return ".".join(str(part) for part in version)


def run_command(command: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(command, capture_output=True, text=True, cwd=ROOT)


def check_tool(spec: ToolCheck) -> list[str]:
    errors: list[str] = []
    executable = shutil.which(spec.command[0])

    if executable is None:
      if spec.label == "ImageMagick":
        executable = shutil.which("convert")
        if executable is not None:
            result = run_command(["convert", "--version"])
        else:
            result = None
      else:
        result = None
    else:
      result = run_command(spec.command)

    if executable is None or result is None:
        marker = "✗" if spec.required else "!"
        print(f"{marker} {spec.label}: missing")
        if spec.required:
            errors.append(f"{spec.label} is required but was not found on PATH. {spec.help_text}")
        return errors

    output = (result.stdout or result.stderr or "").strip()
    if result.returncode != 0:
        marker = "✗" if spec.required else "!"
        print(f"{marker} {spec.label}: command failed")
        if spec.required:
            errors.append(f"{spec.label} exists at {executable} but `{ ' '.join(spec.command) }` failed. {spec.help_text}")
        return errors

    version = parse_version(output, spec.pattern)
    if version is None:
        marker = "✗" if spec.required else "!"
        print(f"{marker} {spec.label}: version not detected")
        if spec.required:
            errors.append(f"{spec.label} did not report a parseable version. Output was: {output}")
        return errors

    if spec.minimum is not None and version < spec.minimum:
        print(f"✗ {spec.label} {version_text(version)}")
        errors.append(f"{spec.label} {version_text(version)} is below the minimum supported version {version_text(spec.minimum)}. {spec.help_text}")
        return errors

    print(f"✓ {spec.label} {version_text(version)}")
    return errors


def check_playwright() -> list[str]:
    errors: list[str] = []

    version_result = run_command(["npx", "playwright", "--version"])
    output = (version_result.stdout or version_result.stderr or "").strip()
    if version_result.returncode != 0:
        print("✗ Playwright: CLI unavailable")
        errors.append("Playwright CLI is required. Run `npm install --no-save playwright` before validation.")
        return errors

    version = parse_version(output, r"Version\s+(\d+(?:\.\d+)+)")
    if version is None:
        print("✗ Playwright: version not detected")
        errors.append(f"Playwright CLI responded but version could not be parsed: {output}")
    else:
        print(f"✓ Playwright {version_text(version)}")

    launch_script = "const { chromium } = require('playwright'); (async () => { const browser = await chromium.launch({ headless: true }); await browser.close(); })().catch((error) => { console.error(error.message || error); process.exit(1); });"
    launch_result = run_command(["node", "-e", launch_script])
    launch_output = (launch_result.stdout or launch_result.stderr or "").strip()
    if launch_result.returncode != 0:
        print("✗ Playwright Chromium launch")
        errors.append("Playwright is installed but Chromium could not be launched. Run `npx playwright install --with-deps chromium` before layout and screenshot validation.")
    else:
        print("✓ Playwright Chromium installed")

    return errors


def main() -> int:
    errors: list[str] = []

    for spec in TOOL_CHECKS:
        errors.extend(check_tool(spec))

    errors.extend(check_playwright())

    if errors:
        print("\nEnvironment validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
