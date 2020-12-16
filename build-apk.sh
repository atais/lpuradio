#!/bin/bash

cd android
./gradlew bundleRelease
cd ..

bta='https://github.com/google/bundletool/releases/download/1.4.0/bundletool-all-1.4.0.jar'
btl='/tmp/bundletool-all-1.4.0.jar'

if [ ! -f "$btl" ]; then
    wget $bta -O $btl
fi

apks='myapp.apks'

java -jar "$btl" build-apks \
  --bundle="android/app/build/outputs/bundle/release/app-release.aab" \
  --output="$apks" \
  --ks="android/app/my-upload-key.keystore" \
  --ks-pass=pass:123456 \
  --ks-key-alias=my-key-alias \
  --key-pass=pass:123456 \
  --mode=universal

apkname=$(cat package.json | jq -r '.name')
apkname="$apkname-$(cat package.json | jq -r '.version').apk"

unzip -p $apks universal.apk > $apkname
rm $apks
