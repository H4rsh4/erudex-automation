/// <reference types="Cypress" />
import LessonPlan from '../../support/pageObjects/LessonPlan'
const LessonPlanPage = new LessonPlan()

const cred = require('../../fixtures/Credentials.json')
const lessonPlanData = require('../../fixtures/Lesson.json')

describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     }); 
    it('Create Lesson Plan',function() {
        cy.intercept({
            pathname: "/user/getUserCurriculum"
        }).as('Curr-Data')
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/lessonPlan/saveTeacherLessonPlan"
        }).as('saveLessonPlan')  
        cy.Curriculum()
        LessonPlanPage.getCreateLesson()
            .click({force: true})
        LessonPlanPage.getLanguage()
            .contains(lessonPlanData.Language)
        LessonPlanPage.getClass()
            .contains(lessonPlanData.Class)
        cy.wait('@Curr-Data')
        LessonPlanPage.getSubject()
            .contains(lessonPlanData.Subject1)
        LessonPlanPage.getChapter()
            .contains(lessonPlanData.Chapter1)
        cy.wait(500)    
        LessonPlanPage.getTopic()
            .contains(lessonPlanData.Topic1)
                .click({force: true})
        cy.contains(lessonPlanData.Lessonplan)
            .click()
        LessonPlanPage.getCalender1()
            .click()
        LessonPlanPage.getDate()
            .contains(lessonPlanData.Date1)
                .click()
        LessonPlanPage.getCalender2()
            .click()
        LessonPlanPage.getDate()
            .contains(lessonPlanData.Date2)
                .click()
        cy.contains('Resources')
            .click({force: true})
        cy.contains('Prior Knowledge')
            .click({force: true})
        cy.contains('Introduction')
            .click({force: true})
        LessonPlanPage.getEditNotes()
            .click()
        LessonPlanPage.getcancelDialog()
            .click()
        cy.contains(lessonPlanData.AddRemove)
            .click()
        LessonPlanPage.getAddMultimeddia()
            .click()
        cy.contains('Definitions')
            .click()
        LessonPlanPage.getcloseDialog()
            .click({force: true})
        LessonPlanPage.getExternalLink()
            .click()
        LessonPlanPage.getLinkname()
            .type(lessonPlanData.Organisation)
        LessonPlanPage.getURL()
            .type(lessonPlanData.URL)
        LessonPlanPage.getcloseDialog()
            .click({force: true})
        LessonPlanPage.getcancelDialog()
            .click({force: true})
        LessonPlanPage.getCreateLessonPlan()
            .click()
        cy.wait('@saveLessonPlan')
    })
    it('View Lesson Plan',function() {
        cy.intercept({
            pathname: "/user/getUserCurriculum"
        }).as('Curr-Data')
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/lessonPlan/getTeacherLessonPlansByCriteria"
        }).as('PlansByCriteria')
        LessonPlanPage.getViewLessonPlan()
            .click({force: true})
            // cy.wait(2000)
        LessonPlanPage.getViewClass()
            .contains(lessonPlanData.Class)
        LessonPlanPage.getViewsubject()
            .contains(lessonPlanData.Subject1)
        LessonPlanPage.getViewchapter()
            .contains(lessonPlanData.chapter1)
            // cy.wait(2000)
        LessonPlanPage.getViewdate()
            .contains(lessonPlanData.StartDate)
        LessonPlanPage.getCalender1()
            .click()
        LessonPlanPage.getDate()
            .contains(lessonPlanData.Date1).click()
        LessonPlanPage.getCalender2()
            .click()
        LessonPlanPage.getDate()
            .contains(lessonPlanData.Date2)
                .click()
        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("Physics"))
            {
                $e1.click()
            }
        })
        cy.wait('@PlansByCriteria')
        cy.contains(lessonPlanData.LessonDelivery)
            .click({force: true})
            // cy.wait(2000)
        cy.contains(lessonPlanData.LessonClosure)
            .click({force: true})
            // cy.wait(2000)
        cy.contains(lessonPlanData.LearningObjectives)
            .click({force: true})
            // cy.wait(2000)
        LessonPlanPage.getEditLesson()
            .click()
        cy.wait('@PageActivityData')
        LessonPlanPage.getViewBack()
            .click()
        cy.wait('@PageActivityData')
        
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    