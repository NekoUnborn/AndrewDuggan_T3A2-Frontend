// Tests are commented out to reduce the load this has on the local server and the prod server
// describe('Adding Medication to DB from Front-end', ()=>{
//     it('Should add a medicine to the DB and fail if it exists', () =>{
//         cy.visit(Cypress.env('prod'))
//         cy.get('#username').type('admin')
//         cy.get('#password').type('Password')
//         cy.get('#submit').click()
//         cy.get('#medicine').click()
//         cy.get('#addmed').click()
//         cy.get('form > input[type="text"]').type('Ritalin LA')
//         cy.get('form > textarea[type="text"]').type(description)
//         cy.get('form > button[type="submit"]').click()
//         cy.get('#medicine').click()
//         cy.contains('Insulin')
//     })
// } )

// describe('Fails to create a medication entry and displays message', ()=> {
//     it('Should fail if the description is blank',()=> {
//         cy.visit(Cypress.env('prod'))
//         cy.get('#username').type('admin')
//         cy.get('#password').type('Password')
//         cy.get('#submit').click()
//         cy.get('#medicine').click()
//         cy.get('#addmed').click()
//         cy.get('form > input[type="text"]').type('Pineapples')
//         cy.get('form > button[type="submit"]').click()
//         cy.get('#medicine').click()
//         cy.contains("Description can't be blank")
//     })
// })

// describe('Fail to create', () =>{
//     it('Should fail if the name is blank',()=> {
//         cy.visit(Cypress.env('prod'))
//         cy.get('#username').type('admin')
//         cy.get('#password').type('Password')
//         cy.get('#submit').click()
//         cy.get('#medicine').click()
//         cy.get('#addmed').click()
//         cy.get('form > textarea[type="text"]').type('Testing')
//         cy.get('form > button[type="submit"]').click()
//         cy.get('#medicine').click()
//         cy.contains("Name can't be blank")
//     })
// })

// describe('Should Filter List', () => {
//     it('Select the filter input and type something in it',()=> {
//                 cy.visit(Cypress.env('prod'))
//                 cy.get('#username').type('admin')
//                 cy.get('#password').type('Password')
//                 cy.get('#submit').click()
//                 cy.get('#medicine').click()
//                 cy.contains('Rit')
//                 cy.get('#filter').type('Rit')
//                 cy.contains('Ritalin LA')

// })
// })