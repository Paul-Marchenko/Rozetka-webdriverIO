const { Builder, By } = require('selenium-webdriver');
const { assert } = require('chai');


const personalOffice = By.css('header-topline__user-link link-dashed');
const emailField = By.id('#auth_email');
const passwordField = By.id('#auth_pass');
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
    it('Log in to the personal office', async () => {
        personalOfficeLink =await driver.findElement(personalOffice);
        personalOfficeLink.click();
        await driver.findElement(emailField).sendKeys(email);
        await driver.findElement(passwordField).sendKeys(password);
        await driver.findElement(submitButton).click();
        await driver.wait(until.elementLocated(personalOffice), 50000);
        assert.equal(personalOfficeLink.getText == userName);

    });
    afterEach(()=>{
        driver.quit();
    });

});


