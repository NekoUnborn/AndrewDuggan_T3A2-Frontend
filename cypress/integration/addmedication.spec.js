

describe('Adding Medication to DB from Front-end', ()=>{
    it('should load a page that contains an add form', ()=>{
        cy.visit('http://localhost:3000/medicine/add')
        cy.contains('Made it here')
        cy.get('form > input' )
        cy.get('form > button')
        cy.get('form > textarea')
    })
} )
describe('CRUD Functions for medicine', ()=>{
    it('Should add a medicine to the DB', () =>{
        cy.visit('http://localhost:3000/medicine/add')
        cy.get('form > input[type="text"]').type('Anti Psychotics')
        cy.get('form > textarea[type="text"]').type('Makes ya less crazy')
        cy.get('form > button[type="submit"]').click()
        cy.get('button').click()
        cy.contains('Insulin')
    })
})