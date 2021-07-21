const medicine = "Insulin"
const description = 'Lowers your blood sugar'
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
        cy.get('form > input[type="text"]').type(medicine)
        cy.get('form > textarea[type="text"]').type(description)
        cy.get('form > button[type="submit"]').click()
        cy.get('button').click()
        cy.contains('Medicine already exists')
    })
})

describe('Testing Validation on the addition of medicine fail', ()=>{
    it('Should fail if the name is blank',()=> {
        cy.visit('http://localhost:3000/medicine/add')
        cy.get('form > textarea[type="text"]').type(description)
        cy.get('form > button[type="submit"]').click()
        cy.get('button').click()
        cy.contains("Name can't be blank")
    })
    it('Should fail if the description is blank',()=> {
        cy.visit('http://localhost:3000/medicine/add')
        cy.get('form > input[type="text"]').type('Pineapples')
        cy.get('form > button[type="submit"]').click()
        cy.get('button').click()
        cy.contains("Description can't be blank")
    })
})
