/// <reference types="Cypress" />
import Reports from '../../support/pageObjects/Reports'
const ReportsPage = new Reports()

const cred = require('../../fixtures/Credentials.json')
const reportsData = require('../../fixtures/Report.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     }); 
    it('Teacher Student Reports',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/user/getStudentsByCriteriaForTeacher"
        }).as('StudentsByCriteria')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/reports/getReportDetails"
        }).as('ReportDetails')
        cy.Curriculum()
        ReportsPage.getStudentReports()
            .click({force:true})
        ReportsPage.getClass()
            .contains(reportsData.Class)
        cy.wait('@StudentsByCriteria')
        ReportsPage.getName()
            .type(reportsData.Organisation)
        ReportsPage.getSection()
            .contains(reportsData.Section)
        ReportsPage.getPerformance()
            .click()
        cy.wait('@PageActivityData')
        ReportsPage.getMonthPerformance()
            .contains(reportsData.MonthPerform) 
        ReportsPage.getSubjects()
            .contains(reportsData.GradeSubj)
        cy.wait('@ReportDetails')
        ReportsPage.getChapters()
            .contains(reportsData.gradechapter)
        // cy.wait('@ReportDetails')
        cy.waitUntil(()=> true).wait(500)    
        ReportsPage.getPerformTopic()
            .contains(reportsData.PerformTopic)
                .click({force:true})
        ReportsPage.getActivityTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssessTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssignTab()
            .click()
    })
    it('Teacher Usage Reports ',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/user/getStudentsByCriteriaForTeacher"
        }).as('StudentsByCriteria')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/reports/getReportDetails"
        }).as('ReportDetails')  
        ReportsPage.getStudentReports()
            .click({force:true})
        ReportsPage.getClass()
            .contains(reportsData.Class)
        cy.wait('@StudentsByCriteria')
        ReportsPage.getName()
            .type(reportsData.Organisation)
        ReportsPage.getSection()
            .contains(reportsData.Section)
        ReportsPage.getUasgeReport()
            .click()
        cy.wait('@PageActivityData')
        ReportsPage.getMonthUsage()
            .contains(reportsData.MonthUsage) 
        ReportsPage.getSubjects()
            .contains(reportsData.GradeSubj)
        ReportsPage.getChapters()
            .contains(reportsData.gradechapter)
        cy.waitUntil(()=> true).wait(500)    
        ReportsPage.getPerformTopic()
            .contains(reportsData.PerformTopic)
                .click({force:true})
        ReportsPage.getActivityTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssessTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssignTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getCollaborationTab()
            .click({force: true})
    })
    it('Teacher Comparative Reports ',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/user/getStudentsByCriteriaForTeacher"
        }).as('StudentsByCriteria')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/reports/getReportDetails"
        }).as('ReportDetails')
        ReportsPage.getStudentReports()
            .click({force:true})
        ReportsPage.getClass()
            .contains(reportsData.Class)
        cy.wait('@StudentsByCriteria')
        ReportsPage.getName()
            .type(reportsData.Organisation)
        ReportsPage.getSection()
            .contains(reportsData.Section)
        ReportsPage.getComparativeperf()
            .click()
        cy.wait('@PageActivityData')
        ReportsPage.getComparativesubjct()
            .contains(reportsData.Subjects)
        cy.wait('@ReportDetails')
        ReportsPage.getComparativeChapter()
            .contains(reportsData.SubjIntro)
        // cy.wait('@ReportDetails')
        cy.waitUntil(()=> true).wait(500)    
        ReportsPage.getComparativetopics()
            .contains(reportsData.PerformTopic)
                .click({force:true})
        ReportsPage.getComparativegrade()
            .contains(reportsData.grade)
        cy.wait('@ReportDetails')
        ReportsPage.getCustomdates()
            .contains(reportsData.CustomDate)
        ReportsPage.getActivityTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssessTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssignTab()
            .click()
        cy.wait('@ReportDetails')    
    })  
    it('Teacher Class Reports ',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/reports/getReportDetails"
        }).as('ReportDetails')
        ReportsPage.getClsReports()
            .click({force:true})
        ReportsPage.getClsreportGrade()
            .contains(reportsData.Class)
        ReportsPage.getClasSubjct()
            .contains(reportsData.GradeSubj)
        cy.wait('@ReportDetails') 
        ReportsPage.getClasSection()
            .contains(reportsData.Section)
        ReportsPage.getActivityTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssessTab()
            .click()
        cy.wait('@ReportDetails')
        ReportsPage.getAssignTab()
            .click()  
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
    
})    