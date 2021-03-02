/*
Author: Murali
*/
/// <reference types="Cypress" />
import Grade from '../../support/pageObjects/Grade'
const grade = new Grade()
const grading = require('../../fixtures/Murali/Grading.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(grading.TeacherUserName,
            grading.TeacherPassword);
    }); 
    it('Grade-book',function() {
        cy.Curriculum()
        cy.wait(2000)
        grade.getGradebook()
            .click()
        grade.getClass()
            .contains(grading.Class)
        grade.getSection()
            .contains(grading.Section)
        grade.getSubject()
            .contains(grading.GradeSubj)
        grade.getGradetype()
            .contains(grading.GradeType)
        cy.contains(grading.AddAssess)
            .click()
        grade.getChapter()
            .contains(grading.gradechapter)
        grade.getAssesmentName()
            .type(grading.AssessName)
        grade.getCalender1()
            .click()
        grade.getDate()
            .contains(grading.Date1).click()
        grade.getCalender2()
            .click()
        grade.getDate()
            .contains(grading.Date2).click()
        grade.getMarks()
            .contains(grading.Marks)
        cy.contains(grading.CreateNdPush)
            .click()
        cy.Logout()
    })    
})    