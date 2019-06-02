# Automation test with WebDriverJS

## DESCRIPTION:
This is a small tutorial for new users who are going to start its automation way
with JS frameworks.
Framework uses VS Code as IDE and selenium-webdriver as automation library.
The new user can use another IDE and libraries instead of described but all
others configurations are basic for more JS frameworks.

## Install project:
+ install VS Code (one of the IDE for JS).
+ create folder for the new project in the PC.(E.g.: 'Rozetka-webdriverIO').
+ open this folder via VS Code.
+ nvm install script via cURL:                                                                    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
+ restart terminal.
------------ 
more information about [node.js](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).
+ nvm install node.
+ npm install (package-lock.json file appears).
+ npm init -i (package.json file appears).

## Install libraries:
+ npm install mocha chai selenium-webdriver.
- ` mocha - test runner ` (or Jasmine),
- ` chai - assertion library `
- ` selenium-webdriver - automation library `
+ Download necessary webdrivers locally:
- Chrome | [chromedriver](http://chromedriver.storage.googleapis.com/index.html)
- Firefox47+ | [geckodriver](https://github.com/mozilla/geckodriver/releases/)
- Safari | [safaridriver](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html#//apple_ref/doc/uid/TP40014305-CH11-DontLinkElementID_28) or (http://elementalselenium.com/tips/69-safari)
- Internet Explorer | [IEDriverServer.exe](http://selenium-release.storage.googleapis.com/index.html)
- Microsoft Edge | [MicrosoftWebDriver.msi](http://go.microsoft.com/fwlink/?LinkId=619687)
- Opera | [operadriver](https://github.com/operasoftware/operachromiumdriver/releases)
- Phantom Js | [phantomjs](http://phantomjs.org/).
+ Add browser webdriver path to the [environment variable PATH] files:
(https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/).

## Additional configurations:
+ change or confige run script in the package.json file:
` Example: `
"scripts": {
    "test": "mocha --timeout 50000 './tests/**/*.js'"
},


## Additional info in links:
+ [WebdriverJS ApiDocs](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
+ [MOCHA](https://mochajs.org)
+ [CHAI](https://www.chaijs.com)

## How to run tests:
+ 
+ npm test (in the VS Code terminal).
