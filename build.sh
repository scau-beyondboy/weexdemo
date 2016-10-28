#!/usr/bin/env bash
error ( ) {
    echo "错误提示："
    echo "$*"
    exit 1
}
which npm >/dev/null 2>&1 || error "not found npm command,please install npm!"
npm run build  >/dev/null 2>&1 ||error "fail to build!"
rsync -av  --exclude='main.js'  dist/*.js  ~/learningproject/WeexDemo/app/src/main/assets >/dev/null 2>&1||error "fail to copy!"
echo "finish build and copy!"