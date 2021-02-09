/// <reference types="cypress" />

//Used fixture file for storing Info 

const constantVars = require('../fixtures/baseData')

context('Login Tests', () =>{
    beforeEach(() => {
        cy.visit(constantVars.URL)
      })
    afterEach(() =>{
        //logout
        cy.wait(2000)
        cy.get('[ng-click="logout()"]')
          .click()
    })
    it('Student Login Test', () =>{

        //Login Actions
        cy.get('.login-form [type="text"]')
          .type(constantVars.studentUsername)
          .should('have.value', constantVars.studentUsername)
        cy.get('.login-form [type="password"]')
          .type(constantVars.studentPassword)
          .should('have.value', constantVars.studentPassword)
        cy.get('.login-form .login-button')
          .click()
        
    })
    it('Teacher Login Test', () =>{
        //Login Actions
        cy.get('.login-form [type="text"]')
          .type(constantVars.teacherUsername)
          .should('have.value', constantVars.teacherUsername)
        cy.get('.login-form [type="password"]')
          .type(constantVars.teacherPassword)
          .should('have.value', constantVars.teacherPassword)
        cy.get('.login-form .login-button')
          .click()
    })
})