# Automation test with WebDriverJS

## DESCRIPTION:
This is a small tutorial for new users who are going to start its automation way
with of JS frameworks.
Framework uses VS Code as IDE and selenium-webdriver as automation library.
The new user can use another IDE and libraries instead of described but all
others configurations are basic for more JS frameworks.

## Install project:
+ install VS Code (one of the IDE for JS).
+ create folder for the new project in the PC.(E.g.: 'Rozetka-webdriverIO').
+ open this folder via VS Code.
+ nvm install script via cURL:                                                                    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
+ restart terminal.
+ nvm install node.
+ npm install (package-lock.json file appears).
+ npm init -i (package.json file appears).

## Install libraries:
+ npm install mocha chai selenium-webdriver.
` mocha - test runner ` (or Jasmine),
` chai - assertion library `
` selenium-webdriver - automation library `

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
