describe('Login test', ()=>{

    it('TC: User can login', ()=>{


        cy.visit('https://acemoneytransfer.com/');
        cy.xpath("//span[@id='select2-send_from-container']").select('Spain');
    })
})
