FROM gcr.io/oss-fuzz-base/base-builder-python:v1

COPY . $SRC/lean-relay
WORKDIR $SRC/lean-relay
COPY .clusterfuzzlite/build.sh $SRC/build.sh
