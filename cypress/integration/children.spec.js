describe('Testing the Children Feature of the Applciation', () => {
    it('should load a page with the heading Children', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin')
        cy.get('#password').type('12345')
        cy.get('#submit').click()
        cy.contains('Home')
    })
    it('should load the childrens page and render content', ()=>{
        cy.get('#testchild').click()
        cy.contains('Children')
        // Should then pull the users children that they have

        // Displays the children onto the page with their checklist
        
    })
})