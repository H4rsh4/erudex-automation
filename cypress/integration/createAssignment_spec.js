/// <reference types="cypress" />

//fixture data
const constantVars = require('../../fixtures/example.json')

//Assignment Variables
const ASSIGNMENT_NAME = 'Test Assignment 8'
const CLASS           = 'Class 12'
const SUBJECT         = 'Physics'
const DIFFICULTY      = 'Easy'
//const DURATION        = ''
//const MARKS           = ''

describe('Loop test', ()=>{
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
  it('Assignment Setup', ()=>{        
    cy.visit(constantVars.URL+'teacher/index.html#/assessment/create')

    cy.get('input#assessmentName')
      .type(ASSIGNMENT_NAME)
    cy.get(':nth-child(6) > .form-control')
      .select(CLASS)
    cy.wait(2000)
    cy.get('[ng-show="createInput.languageId === languageConstants.ENGLISH"]')
      .select(SUBJECT)
    cy.get(':nth-child(10) > .form-control')
      .select(DIFFICULTY)
             
  })
  it('Select Number of Questions and Press OK', ()=>{
    cy.get('.e-button.radius[ng-click="selectMethod(genMethod.manual)"]')
      .click()
    cy.get('.table-sticky-header.has-form > table.f-table.striped tbody .ng-scope > .no-select > .e-button.radius.ng-binding')
      .each(($el, index, $list) =>{
        if(index > 5) return;
        else $el.trigger('click')
      })
    cy.get('[ng-click="okay()"]')
      .scrollIntoView()
      .click({force: true})
    cy.get(' .columns.medium-12.small-12 > [ng-click="createAssessment()"]')
      .scrollIntoView()
      .click({force: true})
    cy.wait(4000)
    })
  it('Check Created assignment', ()=>{
    cy.visit(constantVars.URL+'teacher/index.html#/assessment/list')
    cy.wait(2000)
    //cy.get(' table.f-table.striped.coursework-list-table > tbody > tr > td:nth-child(2)')
    //Getting error that the element is empty?
    cy.get('.f-table > tbody > :nth-child(1) > :nth-child(2)')
    cy.contains('Test Assignment 8')
      .should('have.value', ASSIGNMENT_NAME)
  })
  it('Log User Out', ()=>{
    cy.wait(2000)
    //cy.get('[ng-click="logout()"]')
    cy.get(' i.fa.fa-power-off')
      .click({force: true})
  })
})