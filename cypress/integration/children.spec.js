describe('Testing the Children Feature of the Applciation', () => {
    it('should load a page with the heading Children', () => {
        cy.visit('http://localhost:3000')
                cy.get('#username').type('admin')
                cy.get('#password').type('Password')
                cy.get('#submit').click()
                cy.get('#add-child').click()
                cy.get('#child-name').type('Testy')
                cy.get('#checklist-medicine').type('Rit')
                cy.contains('Ritalin')
                cy.get('#date').type('23:00:00')
                cy.get('#add').click()
                cy.get('#preview').contains('Ritalin LA')
                cy.get('#checklist-medicine').clear().type('Abili')
                cy.contains('Ritalin')
                cy.get('#date').type('23:00:00')
                cy.get('#add').click()
                cy.get('#child-submit').click()
                cy.contains('Testy')
    })
    // it('should load the childrens page and render content', ()=>{
    //     cy.get('#testchild').click()
    //     cy.contains('Children')
    //     // Should then pull the users children that they have

    //     // Displays the children onto the page with their checklist
        
    // })
})