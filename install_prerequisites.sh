#!/bin/bash
#Pre-requisites
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
#sudo apt-get install -y -qq build-essential TODO check if mandatory
apt-get install -y -qq nodejs npm wget curl git python graphicsmagick #TODO check if mandatory

#Install travis-cli command line to be able to encrypt api_keys in the Travis build
sudo gem install travis
#Encrypt your code climate key for Travis build and add it automatically to your .travis.yml
#remember explicitly declare this variables in
#https://travis-ci.org/<YOUR_GIT_USER>/<YOUR_GIT_PROJECT_NAME>/settings/env_vars
travis encrypt CODECLIMATE_REPO_TOKEN=<YOUR_CODE_CLIMATE_TOKEN> --add
travis encrypt FIREBASE_USER=<YOUR_FIREBASE_USER> --add
travis encrypt FIREBASE_PASSWORD=<YOUR_FIREBASE_PASSWORD> --add
travis encrypt FIREBASE_TOKEN='-JszhlobDKDwclughrib|9b96b2538a4796c2f61e18041fcdaf48' --add

#Fix for node first install http://stackoverflow.com/questions/21168141/can-not-install-packages-using-node-package-manager-in-ubuntu
sudo ln -s /usr/bin/nodejs /usr/bin/node

#Install npm global dependencies
npm install -g bower firebase-tools yo gulp-angular karma-cli jshint

#Check versions of installed dependencies
nodejs -v
npm -v
git --version
python --version
uname -r
