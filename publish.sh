#!/bin/bash

export VERSION=0

while getopts v: option
do
  case "${option}"
    in
      v) VERSION=${OPTARG};;
  esac
done

if [ $VERSION != 0 ]
then
  echo Building jrodstein2/emxchange:client-$VERSION ...
  cd ./client
  docker build -t jrodstein2/emxchange:client-$VERSION . && docker push jrodstein2/emxchange:client-$VERSION
  echo Building jrodstein2/emxchange:server-$VERSION ...
  cd ../server
  docker build -t jrodstein2/emxchange:server-$VERSION . && docker push jrodstein2/emxchange:server-$VERSION
fi
