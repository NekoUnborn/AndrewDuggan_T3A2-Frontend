// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () =>{
    it('Clicking "add medication" naviagtes to a new url', () =>{
        cy.visit('http://localhost:3000/medicine')
        cy.contains('Add').click()
        cy.url().should('include', '/add')
    })
})