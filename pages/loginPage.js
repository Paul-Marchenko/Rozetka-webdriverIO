class LoginPage {
    
personalOfficeLink = By.className('header-topline__user-link link-dashed');
modalWindowHeader = By.css('p[class="header-dropdown__title"]');
emailField = By.css('input[id="auth_email"]');
passwordField = By.css('input[id="auth_pass"]');
submitButton = By.css('[class="button button_color_navy auth-modal__login-button"]');

selectPersonalOffice(){
    await driver.findElement(this.personalOfficeLink).click();
    modalWindowheaderTitle = await driver.findElement(this.modalWindowHeader);
    //personalOfficeMenu = driver.findElement(this.personalOfficeLink).getText();
    return modalWindowheaderTitle;
}

loginToPerssonalOffice(email, password){
    selectPersonalOffice();
    await driver.findElement(this.emailField).sendKeys(email);
    await driver.findElement(this.passwordField).sendKeys(password);
    await driver.findElement(this.submitButton).click();
 }

}
export default new LoginPage();
