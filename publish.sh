#!/bin/bash
# Deploy script runs nessecary terraform commands to tear down and stand up
# the slate-server and required resources
#
#   Variables and parameters:
#
#     [-f] | FORCE_ARG  | Force approve argument, varies dependong on TF version
#     [-t] | TARGET     | environment to which to deply the stack (prod, dev)
#     [-e] | ENABLE_EIP | boolean elastic_ip feature toggle
#     [-k] | KEY_NAME   | Name of key pair to attach to ec2 instance
#     [-b] | S3_BUCKET  | specifies name terraform backend s3 bucket
#     [-r] | REGION     | specifies region where desired s3 bucket resides
#
#          | DOC_REPO   | repository of swagger/openapi specs
#          | SLATE_REPO | Repository of slate project to host
#
# EPC Summer 2018 Intern - joshua.rodstein@elliemae.com
#
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #


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
