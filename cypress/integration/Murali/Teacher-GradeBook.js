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
    it('Grade-book',function() {
        TeacherOBJ.getCurriculam()
            .click()
        cy.wait(2000)
        TeacherOBJ.getGradebook()
            .click()
        TeacherOBJ.getGradeClass()
            .contains(Constvarbl.Class)
        TeacherOBJ.getGradesection()
            .contains(Constvarbl.Section)
        TeacherOBJ.getGradesubj()
            .contains(Constvarbl.GradeSubj)
        TeacherOBJ.getGradetype()
            .contains(Constvarbl.GradeType)
        cy.contains(Constvarbl.AddAssess)
            .click()
        TeacherOBJ.getGradeChapter()
            .contains(Constvarbl.gradechapter)
        TeacherOBJ.getAssesmName()
            .type(Constvarbl.AssessName)
        TeacherOBJ.getCalender1()
            .click()
        TeacherOBJ.getDate()
            .contains(Constvarbl.Date1).click()
        TeacherOBJ.getCalender2()
            .click()
        TeacherOBJ.getDate()
            .contains(Constvarbl.Date2).click()
        TeacherOBJ.getGrademarks()
            .contains(Constvarbl.Marks)
        cy.contains(Constvarbl.CreateNdPush)
            .click()
        cy.Logout()
    })    
})    