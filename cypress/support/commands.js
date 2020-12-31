// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//SignIn Function
Cypress.Commands.add(signIn, (Username, Password) => {
    const constantVars = require('../fixtures/baseData')  
    cy.get('.login-form [type="text"]')
          .type(Username)
          .should('have.value', Username)
      cy.get('.login-form [type="password"]')
          .type(Password)
          .should('have.value', Password)
      cy.get('.login-form .login-button')
          .click()
  })

//Logout Fx
Cypress.Commands.add(logOut, (loElement)=>{
    /*
        Logs out after 2 secs 
        using the given element
    */
    //logout
    cy.wait(2000)
    //cy.get('[ng-click="logout()"]')
    cy.get(loElement)
      .click()
})