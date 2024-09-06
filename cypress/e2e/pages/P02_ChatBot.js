import {ChatbotLocators} from "../locators/ChatBot.json"


export class P02_ChatBotClass {
    ClickOnChatBot(){
        cy.xpath(ChatbotLocators.ChatIconLoc).click()
    }
    ChatWithAgent(){
        cy.xpath(ChatbotLocators.ChatAgentLoc).click()
        cy.xpath(ChatbotLocators.OtherRequestLoc).click()
    }


}
