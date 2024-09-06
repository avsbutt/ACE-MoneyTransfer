import{P02_ChatBotClass} from "../pages/P02_ChatBot"
import { LoginUtils } from "../utils/LoginUtils.js"

const P02_Test = new P02_ChatBotClass
describe('ChatBot' , ()=>{
    it("TC: Verify that User can chat with the Agent", ()=>{
        LoginUtils();
        P02_Test.ClickOnChatBot()
        P02_Test.ChatWithAgent()
        cy.screenshot('Verify that User can chat with the Agent')

    })
})
