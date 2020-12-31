/// <reference types="cypress" />

//fixture data
const { after } = require('mocha')
const constantVars = require('../../fixtures/example')

describe('<>', ()=>{
	/*
    before(()=>{
        cy.visit(constantVars.URL)
        cy.signinTeacher()
    })
    after(()=>{
        cy.logout()
    })
	*/
	
  it('Login', ()=>{
    cy.visit(constantVars.URL+'login/index.html?')
    //Support Functions didn't work for some reason
    //cy.Teacher(constantVars.teacherUsername, constantVars.teacherPassword);
    cy.get('.login-form [type="text"]')
      .type(constantVars.teacherUsername)
      .should('have.value', constantVars.teacherUsername)
    cy.get('.login-form [type="password"]')
      .type(constantVars.teacherPassword)
      .should('have.value', constantVars.teacherPassword)
    cy.get('.login-form .login-button').click()
    cy.wait(4000)
  })


  it('Log User Out', ()=>{
    cy.wait(2000)
    //cy.get('[ng-click="logout()"]')
    cy.get(' i.fa.fa-power-off')
      .click({force: true})
  })

})