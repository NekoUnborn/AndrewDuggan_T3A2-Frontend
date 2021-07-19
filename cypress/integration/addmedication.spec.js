

describe('Adding Medication to DB from Front-end', ()=>{
    it('should load a page that contains an add form', ()=>{
        cy.visit('http://localhost:3000/medicine/add')
        cy.contains('Made it here')
        cy.get('form > input' )
        cy.get('form > button')
        cy.get('form > textarea')
    })
} )
describe('Test', ()=>{
    it('should run the previous test and this test', () =>{
        cy.contains('Name')
        cy.get('form > label')
    })
})