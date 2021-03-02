/*
Author: Murali
Slightly Flaky
*/
/// <reference types="Cypress" />
import Curriculam from '../../support/pageObjects/Curriculam'
const curriculum = new Curriculam()
const curriclum = require('../../fixtures/Murali/Curriculum.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(curriclum.TeacherUserName,
            curriclum.TeacherPassword);
     }); 
it('Curriculam page',function() {
    cy.Curriculum()
    curriculum.getGrades()
        .click({force: true})    
    curriculum.getSubChemistry()
        .click({force:true})
    curriculum.getSubMathematics()
        .click({force:true})
    curriculum.getSubPhysics()
        .click({force:true})
    curriculum.getarrowleft()
        .click({force:true})
    curriculum.getarrowleft()
        .click({force:true})
    curriculum.getrefresh()
        .click({force:true})
    curriculum.getLessonDocument()
        .click({ force: true })
    cy.wait(10000)
    curriculum.getPdfNext()
        .click({force:true})
    curriculum.getPdfZoomOut()
        .click({force:true})
    curriculum.getPdfZoomIn()
        .click({force:true})
    curriculum.getPdfFitpage()
        .click({force:true})
    curriculum.getChapterContent()
        .click({force:true})
    curriculum.getchaptercontentclose()
        .click({force:true})
    curriculum.getChapterFeature()
        .click({force:true})
    curriculum.getChapterNotes()
        .click({force:true})
    curriculum.getNotesArea()
        .click({force:true})
    curriculum.getNotesTyping()
        .type(curriclum.videoNotes,{force:true})
    curriculum.getSaveNote()
        .click({force:true})
    curriculum.getNavigateback()
        .click({force:true})
    cy.Logout()
})
})