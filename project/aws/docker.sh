#!/bin/bash -x

echo "Cleaning up old workspace (if exists)"
rm -rf docker

echo "Prepare ruby"
bundle install

CWD=`pwd`

echo "Preparing new workspace (copying files)"
mkdir -p docker

cp dev-build/target/universal/dev-build.zip docker
cp -R project/aws/ docker
cp dev-build/target/scala-2.11/classes/version.txt docker/version.txt
cd docker

source version.txt
export Build

zip -r docker.zip Dockerfile Dockerrun.aws.json dev-build.zip .ebextensions

bundle exec eb_deploy --config-file eb_deployer.yml  --package docker.zip --environment devel

cd $CWD
