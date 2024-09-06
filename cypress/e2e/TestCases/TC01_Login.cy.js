import {P01_LoginClass} from  "../pages/P01_Login.js"
import { LoginUtils } from "../utils/LoginUtils.js"

const P01_Test = new P01_LoginClass()

describe('ACE LOGIN' , ()=>{
    it("TC: Verify the User is Logged in with Valid Cedentials", ()=>{
        LoginUtils();
        cy.screenshot('User is Logged In Successfully')

    })
})