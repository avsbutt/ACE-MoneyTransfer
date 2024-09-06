import {LoginLocators} from "../locators/Login.json"

export class P01_LoginClass {

    HomepageLoginBtn(){
        cy.xpath(LoginLocators.HomepageLoginBtnLoc).click()
        cy.url().should('include', '/login')
    }

    EmailInput(email){
        cy.get(LoginLocators.EmailLoc).type(email)
    }
    PasswordInput(password){
        cy.get(LoginLocators.PasswordLoc).type(password)
    }
    ClickOnLoginBtn(){
        cy.xpath(LoginLocators.LoginBtn).click()
    }
    VerifyLoginIsSuccess(){
        cy.xpath(LoginLocators.ChatIconLoc).should('be.visible')
    }

}