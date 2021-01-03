/// <reference types="cypress" />

const constantVars = require('../fixtures/baseData.json')

describe('My First test', () => {
    it('Login', ()=>{
        cy.visit(constantVars.URL+'login/index.html?')
        //Support Functions didn't work for some reason
        //cy.Teacher(constantVars.teacherUsername, constantVars.teacherPassword);
        cy.get('.login-form [type="text"]')
          .type(constantVars.studentUsername)
          .should('have.value', constantVars.studentUsername)
        cy.get('.login-form [type="password"]')
          .type(constantVars.studentPassword)
          .should('have.value', constantVars.studentPassword)
        cy.get('.login-form .login-button').click()
        cy.wait(4000)
    });
    it('Curriculum Pre-Steps', () => {
        cy.get("span.icon-curriculum")
          .click()
        cy.wait(2000)
        cy.get(".subject-button")
          .contains("Mathematics")
          .click()
        cy.get(".expand-arrow")
          .click()
        cy.get(".fa.fa-arrow-circle-left")
          .click()
        cy.get(".nice-select.curriculum-grade-dropdown")
          .click()
          .contains("CBSE-Class 12")
          .click()
    });
    it('Displaying Curriculum',() => {
        cy.get('li>div.resource-img-wrapper')
          .eq(0)
          .click({force:true})
    });
    it('Add Note', () => {
        let time = new Date().toLocaleString()
        cy.wait(10000)
        cy.contains('New Note')
            .click()
        cy.get('#newNoteText')
            .type(time)
        cy.contains('Save')
            .click()
        cy.wait(1000)
        cy.get('.note-text').pop().then(function(text) {
          var note = text.text()
          expect(note).to.contain(time)
        })
    })
    it('Log User Out', ()=>{
        cy.wait(2000)
        cy.get('[ng-click="logout()"]')
        //cy.get(' i.fa.fa-power-off')
          .click({force: true})
    });
});