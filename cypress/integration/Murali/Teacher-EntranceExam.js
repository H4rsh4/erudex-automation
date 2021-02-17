/*
Author: Murali
*/
/// <reference types="Cypress" />
import Teacherobj from '../../support/pageObjects/Teacherobj'
const TeacherOBJ = new Teacherobj()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('EntranceExamPractise',function() {
        TeacherOBJ.getCurriculam()
            .click()
        TeacherOBJ.getEntranceExam()
            .click()
        TeacherOBJ.getSubPhysics()
            .click()
        TeacherOBJ.getSubMathematics()
            .click()
        TeacherOBJ.getEntranceExamChapter()
            .contains(Constvarbl.EntrancChpter)
        TeacherOBJ.getEntranceExamConcepts()
            .click()
        cy.contains(Constvarbl.RelatedChapter)
            .click()
        cy.contains('>')
            .click({force: true})// next pdf page
        cy.contains('+')
            .click({force: true})
        cy.contains('Fit Page')
            .click()
        TeacherOBJ.getNavigateback()
            .click()
        cy.Logout()
    })
})    