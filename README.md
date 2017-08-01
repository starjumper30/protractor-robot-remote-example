# Protractor Robot Remote Example Application

This project is an example application to demonstrate integration between the Robot Framework for test automation and Protractor.

Specifically, take a look at the *.robot and *.robot-library.ts files under the e2e folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Setup

### Robot Framework

You will need to install the [Robot Framework](https://github.com/robotframework/robotframework/blob/master/INSTALL.rst) before executing tests.

### Update webdriver before running tests

`"./node_modules/.bin/webdriver-manager" update`
If you are behind a corporate proxy, you need to set the HTTPS_PROXY and HTTP_PROXY environment variables and then do `"./node_modules/.bin/webdriver-manager" update --proxy`

## Running end-to-end tests with Protractor and Robot

Run `npm run re2e` to execute the end-to-end tests via [protractor-robot-remote](https://github.com/starjumper30/protractor-robot-remote#readme).
Before running the tests make sure you are serving the app via `ng serve` to run the application at `http://localhost:4200/`.
Before running the tests make sure you are running the protractor-robot-remote server via `npm run robotremote`.
