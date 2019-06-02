const { Builder, By } = require('selenium-webdriver');
const { assert } = require('chai');


const personalOffice = By.className('header-topline__user-link link-dashed');
const modalWindowHeader = By.css('p[class="header-dropdown__title"]');
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
        await driver.findElement(personalOffice).click();
        personalOfficeLink = driver.findElement(personalOffice);
        modalWindowheaderTitle= await driver.findElement(modalWindowHeader);
        assert.exists(modalWindowheaderTitle, 'Element is not found');
        await driver.wait(until.elementLocated(driver.findElement(emailField)), 50000);
        await driver.findElement(emailField).sendKeys(email);
        await driver.findElement(passwordField).sendKeys(password);
        await driver.findElement(submitButton).click();
        await driver.wait(until.elementLocated(driver.findElement(personalOffice)), 50000);
        assert.equal(personalOfficeLink.getText == userName);

    });
    afterEach(()=>{
        driver.quit();
    });

});


