/// <reference types="Cypress" />

import Grade from '../../support/pageObjects/Grade'
const GradePage = new Grade()

const cred = require('../../fixtures/Credentials.json')
const gradeData = require('../../fixtures/Grading.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
    }); 
    it('Grade-book',function() {
        cy.Curriculum()
        cy.wait(2000)
        GradePage.getGradebook()
            .click()
        cy.wait(5000)
        GradePage.getClass()
            .contains(gradeData.Class)
        cy.wait(10000)
        GradePage.getSection()
            .contains(gradeData.Section)
        GradePage.getSubject()
            .contains(gradeData.GradeSubj)
        GradePage.getGradetype()
            .contains(gradeData.GradeType)
        cy.wait(10000)
        cy.contains(gradeData.AddAssess)
            .click({force:true})
        GradePage.getChapter()
            .contains(gradeData.gradechapter)
        GradePage.getAssesmentName()
            .type(gradeData.AssessName,{force:true})
        GradePage.getCalender1()
            .click({force:true})
        GradePage.getDate()
            .contains(gradeData.Date1).click({force:true})
        GradePage.getCalender2()
            .click({force:true})
        GradePage.getDate()
            .contains(gradeData.Date2).click({force:true})
        GradePage.getMarks()
            .contains(gradeData.Marks)
        cy.contains(gradeData.CreateNdPush)
            .click({force:true})
        //cy.Logout()
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    
