import {P01_LoginClass} from  "../pages/P01_Login.js"

const P01_Test = new P01_LoginClass()

describe('ACE LOGIN PAGE' , ()=>{
    it("TC: Verify the Login Functionality", ()=>{
       cy.visit('' , {failOnStatusCode: false})
        P01_Test.HomepageLoginBtn()

        cy.fixture('LoginCredentials.json').then((data)=>{
            P01_Test.EmailInput(data.username)
            P01_Test.PasswordInput(data.password)
        })
        P01_Test.ClickOnLoginBtn()
        P01_Test.VerifyLoginIsSuccess()
        P01_Test.ChatWiththeAgent()
        cy.screenshot('FIRST_[HH-MM-SS]')

    })
})