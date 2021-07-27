// describe('Should Login using Admin Account', () => {
//     it('Should load the login page and log in and loads the dashboard', () =>{
//         cy.visit(Cypress.env('prod'))
//         cy.get('#username').type('admin')
//         cy.get('#password').type('Password')
//         cy.get('#submit').click()
//         cy.contains('CheckList')
//         cy.contains('Medicine')
//     })
// })

// describe('Should signup a new user', () =>{
//     it('Enter in new user details', () => {
//         cy.visit(Cypress.env('prod')
//         cy.get('#signup').click()
//         cy.get('#username').type('test')
//         cy.get('#password').type('Password')
//         cy.get('#email').type('test@foo.com')
//         cy.get('#pin').type('12345')
//         cy.get('#signup-submit').click()
//         cy.contains('CheckList')
//         cy.contains('Medicine')
//     })
// })