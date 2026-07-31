#!/bin/bash -eu

pyinstaller \
  --distpath "$OUT" \
  --onefile \
  --name gateway_boundaries_fuzzer.pkg \
  --paths "$SRC/lean-relay" \
  --paths "$SRC/lean-relay/bin" \
  "$SRC/lean-relay/fuzz/gateway_boundaries_fuzzer.py"

cat > "$OUT/gateway_boundaries_fuzzer" <<'WRAPPER'
#!/bin/sh
# LLVMFuzzerTestOneInput marker for ClusterFuzzLite fuzzer detection.
this_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
exec "$this_dir/gateway_boundaries_fuzzer.pkg" "$@"
WRAPPER
chmod +x "$OUT/gateway_boundaries_fuzzer"
