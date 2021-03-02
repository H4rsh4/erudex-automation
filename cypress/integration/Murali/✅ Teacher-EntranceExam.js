/*
Author: Murali
*/
/// <reference types="Cypress" />
import EntranceExam from '../../support/pageObjects/EntanceExm'
const entrance = new EntranceExam()
const entrnce = require('../../fixtures/Murali/Entrance.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(entrnce.TeacherUserName,
            entrnce.TeacherPassword);
     }); 
    it('EntranceExamPractise',function() {
        cy.Curriculum()
        entrance.getEntranceExam()
            .click()
        entrance.getSubPhysics()
            .click()
        entrance.getSubMathematics()
            .click()
        entrance.getExamChapter()
            .contains(entrnce.EntrancChpter)
        entrance.getExamConcepts()
            .click()
        cy.contains(entrnce.RelatedChapter)
            .click()
        cy.contains('>')
            .click({force: true})// next pdf page
        cy.contains('+')
            .click({force: true})
        cy.contains(entrnce.FitPage)
            .click({force:true})
        entrance.getNavigateback()
            .click()
        cy.Logout()
    })
})    