/// <reference types="cypress" />

//Used fixture file for storing Info 

const constantVars = require('../../fixtures/example')

context('Login Tests', () =>{
    beforeEach(() => {
        cy.visit(constantVars.URL)
      })
    afterEach(() =>{
        //logout
        cy.wait(2000)
        cy.get('.right-off-canvas-toggle')
          .click()
          cy.wait(500)
        cy.get('.off-canvas-list > [ng-click="logoutUser()"] > a')
          .click()
          cy.wait(2000)
    })
    it('Student Login Test', () =>{

        //Login Actions
        cy.get('.mobile-login-form [type="text"]')
          .type(constantVars.studentUsername)
          .should('have.value', constantVars.studentUsername)
        cy.get('.mobile-login-form [type="password"]')
          .type(constantVars.studentPassword)
          .should('have.value', constantVars.studentPassword)
        cy.get('.mobile-login-form .login-button')
          .click()
        cy.wait(2000)
        
    })
    it('Teacher Login Test', () =>{
        //Login Actions
        cy.get('.mobile-login-form [type="text"]')
          .type(constantVars.teacherUsername)
          .should('have.value', constantVars.teacherUsername)
        cy.get('.mobile-login-form [type="password"]')
          .type(constantVars.teacherPassword)
          .should('have.value', constantVars.teacherPassword)
        cy.get('.mobile-login-form .login-button')
          .click()
        cy.wait(2000)
    })
})