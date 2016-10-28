#!/usr/bin/env bash
error ( ) {
    echo "错误提示："
    echo "$*"
    exit 1
}
which weex >/dev/null 2>&1 || error "not found weex command,please install weex!"
if [ -z  "$1" ];  then
	echo "please input weex file path!"
	#exit 1
else
	weex debug $1 -p 8081
fi
