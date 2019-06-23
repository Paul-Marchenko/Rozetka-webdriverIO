import LoginPage from '../../pages/loginPage';

const { Builder, By, until } = require('selenium-webdriver');
const { assert, expect } = require('chai');


const activeLanguage = By.css('[class="header-topline__language-item_state_active"]');
const uaLanguage = By.xpath('//a[contains(@href,"/ua/") and contains(text(),"UA")]');

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

    it('Title for the main page', async () => {
        driver.getTitle().then((title) => {
            console.log('Title is: ' + title);
            assert.equal(title == 'Интернет-магазин ROZETKA™: официальный сайт самого популярного онлайн-гипермаркета в Украине');
        });
    });

    it.only('Log in to the personal office', async () => {
        // await driver.findElement(loginPage.personalOfficeLink).click();
        // personalOfficeMenu = driver.findElement(loginPage.personalOfficeLink).getText();
        // LoginPage.selectPersonalOffice();
        assert.exists(LoginPage.selectPersonalOffice(), 'Personal office header is not found');
        // await driver.findElement(loginPage.emailField).sendKeys(loginPage.email);
        // await driver.findElement(loginPage.passwordField).sendKeys(loginPage.password);
        // await driver.findElement(loginPage.submitButton).click();
        LoginPage.loginToPerssonalOffice(email, password);
        driver.wait(function () {
            driver.findElement(loginPage.personalOfficeLink).isDisplayed().getText().then(function (userText) {
                expect(userText).to.equal(loginPage.userName, "'User ' + userName + ' is not login to the personal office'");
                console.log('User ' + userText + ' login succesfully');
            });
        }, 50000);
    });
    // it.only('Selected language is UA', () => {
    //     function selectedLanguage(){
    //         if (driver.findElement(activeLanguage).getText() != 'UA'){
    //             driver.findElement(uaLanguage).click();
    //         }
    //         expect(driver.findElement(activeLanguage).getText()).to.equal(' UA ');
    //     }
    //     selectedLanguage();
    //     let lan = driver.findElement(activeLanguage);
    //     let lanText = driver.findElement(activeLanguage).getText();
    //     console.log(lan);
    //     console.log(lanText);
    //     expect(driver.findElement(activeLanguage).getText()).to.equal(' UA ');

    // });
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
