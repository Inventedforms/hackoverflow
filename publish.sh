#!/bin/bash

cd ./client
pwd
docker build -t jrodstein2/emxchange:client-1.0 . && docker push jrodstein2/emxchange:client-1.0

cd ../server
pwd
docker build -t jrodstein2/emxchange:server-1.0 . && docker push jrodstein2/emxchange:server-1.0
