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


describe('Login to the site', () => {
    let driver;
    beforeEach(async () => {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        driver.manage().setTimeouts({ implicit: 4000, pageLoad: 10000 });
        await driver.get('https://rozetka.com.ua/ua/');
        



    });
    it('Title for the maun page', async () =>{
        driver.getTitle().then((title) => {
            console.log('Title is: ' + title);
            assert.equal(title == 'Интернет-магазин ROZETKA™: официальный сайт самого популярного онлайн-гипермаркета в Украине');
        });

    })
    it('Log in to the personal office', async () => {
        await driver.findElement(personalOffice).click();
        personalOfficeLink = driver.findElement(personalOffice);
        personalOfficeLink.getText();
        modalWindowheaderTitle = await driver.findElement(modalWindowHeader);
        assert.exists(modalWindowheaderTitle, 'Element is not found');
        //await driver.wait(until.elementLocated(driver.findElement(emailField)), 50000);
        await driver.findElement(emailField).sendKeys(email);
        await driver.findElement(passwordField).sendKeys(password);
        await driver.findElement(submitButton).click();
        // await driver.wait(until.elementLocated(personalOffice)).then(() => {
        //     driver.wait(until.elementIsVisible(driver.findElement(personalOffice)), 50000).then(() => {
        //       console.log('User ' + userName + ' login succesfully');
        //       print('User ' + userName + ' login succesfully');
        //       assert.equal(personalOfficeLink.getText == userName);
        //     })
        //   })
        await driver.wait(until.elementIsVisible(driver.findElement(personalOffice)), 50000);
        //assert.equal(personalOfficeLink.getText() == userName);
        //assert.equal(personalOfficeLink.getText() == userName, "'User ' + userName + ' login succesfully'");
        //assert.equal(personalOfficeLink.getText() == userName);
        await driver.findElement(personalOffice).getText().then(function (userText) {
            expect(userText).to.equal(userName);
        })



    });
    afterEach(() => {
        driver.quit();
    });

});


