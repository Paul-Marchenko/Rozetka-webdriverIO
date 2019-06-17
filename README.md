# Automation test with WebDriverJS

## DESCRIPTION:
This is a small tutorial for new users who are going to start its automation way
with JS frameworks.
Framework uses VS Code as IDE and selenium-webdriver as automation library.
The new user can use another IDE and libraries instead of described but all
others configurations are basic for more JS frameworks.

## Install project:
1. install VS Code (one of the IDE for JS).
2. create folder for the new project in the PC.(E.g.: 'Rozetka-webdriverIO').
3. open this folder via VS Code.
4. nvm install script via cURL:                                                                    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
5. restart terminal.
> more information about [node.js](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).
6. nvm install node.
7. npm install (package-lock.json file appears).
8. npm init -i (package.json file appears).

> If needs to be installed whole package for the project by default npm:
1. npm install -g npm@4.6.1
2. npm install -g create-react-native-app
3. reate-react-native-app Rozetka-webdiverIO
4. npm start


## Install libraries:
1. npm install mocha chai selenium-webdriver.
```
mocha - test runner (or Jasmine),
chai - assertion library,
selenium-webdriver - automation library.
```
if selenium-standalone is used then use command: 
+ `npm install --save-dev webdriverio selenium-standalone`
+ `./node_modules/.bin/selenium-standalone install`
start selenium-standalone:
+ `./node_modules/.bin/selenium-standalone start`

2. Download necessary webdrivers locally:
  - Chrome | [chromedriver](http://chromedriver.storage.googleapis.com/index.html).
  - Firefox47+ | [geckodriver](https://github.com/mozilla/geckodriver/releases/).
  - Safari | [safaridriver](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html#//apple_ref/doc/uid/TP40014305-CH11-DontLinkElementID_28) or (http://elementalselenium.com/tips/69-safari).
  - Internet Explorer | [IEDriverServer.exe](http://selenium-release.storage.googleapis.com/index.html).
  - Microsoft Edge | [MicrosoftWebDriver.msi](http://go.microsoft.com/fwlink/?LinkId=619687).
  - Opera | [operadriver](https://github.com/operasoftware/operachromiumdriver/releases)
  - Phantom Js | [phantomjs](http://phantomjs.org/).
3. Add browser webdriver path to the [environment variable PATH](https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/) files.

## Additional configurations:
1. change or confige run script in the package.json file:
` Example: `
```
"scripts": {
    "test": "mocha --timeout 50000 './tests/**/*.js'"
},
```
2. The testrunner will be bundled as a separate NPM package:
`npm install @wdio/cli`.
3. Run:
`/node_modules/.bin/wdio` from the command line.
4. Loglevel can be installed:
`./node_modules/.bin/wdio --baseUrl=https://rozetka.com.ua/ua/ --logLevel=info`
5. Install selenium-standalone-service:
`npm install wdio-selenium-standalone-service --save-dev`

## Additional info is in links:
+ [WebdriverJS ApiDocs](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html).
+ [MOCHA](https://mochajs.org).
+ [CHAI](https://www.chaijs.com).

## How to run tests:
+ npm test (in the VS Code terminal).
or
+ `DEBUG=true npm test`.
or with specific env:
+ `SERVER=prod npm test`
or only one specific test:
+ `npm test -- --spec=test/specs/testloginPage.spec.js`
