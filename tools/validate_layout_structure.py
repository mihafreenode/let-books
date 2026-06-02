#!/usr/bin/env python3

from __future__ import annotations

import os
import socket
import subprocess
import sys
import time
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
DEFAULT_PORT = 4173


def wait_for_port(host: str, port: int, timeout_seconds: float = 15.0) -> None:
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(0.5)
            if sock.connect_ex((host, port)) == 0:
                return
        time.sleep(0.2)
    raise RuntimeError(f"Timed out waiting for local docs server on {host}:{port}")


def run_layout_validation(base_url: str) -> int:
    env = os.environ.copy()
    env["DOCS_BASE_URL"] = base_url
    return subprocess.run(["node", "tests/docs/layout-validation.cjs"], cwd=ROOT, env=env).returncode


def main() -> int:
    external_base_url = os.environ.get("DOCS_BASE_URL")
    if external_base_url:
        return run_layout_validation(external_base_url)

    server = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(DEFAULT_PORT)],
        cwd=ROOT,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    try:
        wait_for_port("127.0.0.1", DEFAULT_PORT)
        return run_layout_validation(f"http://127.0.0.1:{DEFAULT_PORT}")
    finally:
        server.terminate()
        try:
            server.wait(timeout=5)
        except subprocess.TimeoutExpired:
            server.kill()
            server.wait(timeout=5)


if __name__ == "__main__":
    raise SystemExit(main())
