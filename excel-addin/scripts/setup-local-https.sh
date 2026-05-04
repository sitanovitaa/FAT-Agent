#!/bin/zsh
set -euo pipefail

if ! command -v mkcert >/dev/null 2>&1; then
  echo "mkcert is not installed. Install it with: brew install mkcert"
  exit 1
fi

SCRIPT_DIR="${0:A:h}"
PROJECT_ROOT="${SCRIPT_DIR:h}"
CERT_DIR="$PROJECT_ROOT/certs"

mkdir -p "$CERT_DIR"

mkcert -install
mkcert -key-file "$CERT_DIR/localhost-key.pem" -cert-file "$CERT_DIR/localhost.pem" localhost 127.0.0.1 ::1

echo "Trusted localhost certificates created in $CERT_DIR"
