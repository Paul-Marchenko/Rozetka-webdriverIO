const { Builder, By, until } = require('selenium-webdriver');
const { assert, expect } = require('chai');



const personalOffice = By.className('header-topline__user-link link-dashed');
const modalWindowHeader = By.css('p[class="header-dropdown__title"]');
//const emailField = By.id('#auth_email');
const emailField = By.css('input[id="auth_email"]');
const passwordField = By.css('input[id="auth_pass"]');
const submitButton = By.css('[class="button button_color_navy auth-modal__login-button"]');
const email = 'ForTestAct@i.ua';
const password = '!QAZ2wsx';
const userName = 'Richard';
userText = '';


describe('Login to the site', () => {
    let driver;
    beforeEach(async () => {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        driver.manage().setTimeouts({ implicit: 4000, pageLoad: 10000 });
        await driver.get('https://rozetka.com.ua/ua/');
    });

    it('Title for the main page', async () => {
        driver.getTitle().then((title) => {
            console.log('Title is: ' + title);
            assert.equal(title == 'Интернет-магазин ROZETKA™: официальный сайт самого популярного онлайн-гипермаркета в Украине');
        });
    });

    it('Log in to the personal office', async () => {
        await driver.findElement(personalOffice).click();
        personalOfficeLink = driver.findElement(personalOffice);
        personalOfficeLink.getText();
        modalWindowheaderTitle = await driver.findElement(modalWindowHeader);
        assert.exists(modalWindowheaderTitle, 'Element is not found');
        await driver.findElement(emailField).sendKeys(email);
        await driver.findElement(passwordField).sendKeys(password);
        await driver.findElement(submitButton).click();
        driver.wait(function () {
            driver.findElement(personalOffice).isDisplayed().getText().then(function (userText) {
                expect(userText).to.equal(userName, "'User ' + userName + ' is not login to the personal office'");
                console.log('User ' + userText + ' login succesfully');
            });
        }, 50000);
    });
    afterEach(() => {
        driver.quit();
    });
    /** 
         * //let hasExist = driver.isExisting("");
        //expect(hasExist, "...text").to.be.true;
        //let isTextShown = driver.isVisible(tr="....Text...")
        // for error message as E.g;
        //expect(isTextShown).to.be.true;
        //let hasFocusedField = driver.hasFocus("#...")
        //expect(hasFocusedField, "...text").to.be.true;
        //waitFor;
        //wait.until;
        //addCommand;
        //execute or selectorExecute;
        //notifier;
        //$. $$;
        //add exlude;
        */

});


