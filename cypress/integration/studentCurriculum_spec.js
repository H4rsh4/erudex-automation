/// <reference types="cypress" />

const constantVars = require('../../fixtures/example.json')

describe('My First test', () => {
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
        cy.get(".collab-collapse",{ timeout: 10000 })
          .click()
        cy.get(".fa.fa-chevron-left")
          .eq(1)
          .click()
        cy.wait(10000)
        cy.get(".iconButton.pause")
          .click()
        cy.get(".accordion")
          .contains("Chapter Content")
          .click()
        cy.get(".related-resource")
          .eq(4)
          .click()
        cy.get('vg-play-pause-button.ng-scope > .iconButton')
          .click()

        //Checking Chapter Features
        cy.get('[resources="selectedChapter.chapterResources"] >')
          .each(($el, idx, $list)=>{
            cy.contains("Chapter Features")
              .click()
            cy.wait(2000)
            let child = `[resources="selectedChapter.chapterResources"] > [index="${idx}"]`;
            cy.get(child)
              .trigger('click')
            cy.wait(2000)
          })
        cy.wait(10000)
    });
    it('Log User Out', ()=>{
        cy.wait(2000)
        cy.get('[ng-click="logout()"]')
        //cy.get(' i.fa.fa-power-off')
          .click({force: true})
    });
});