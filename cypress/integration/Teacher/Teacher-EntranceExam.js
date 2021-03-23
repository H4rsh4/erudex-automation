/// <reference types="Cypress" />
import EntranceExam from '../../support/pageObjects/EntanceExm'
const EntrancePage = new EntranceExam()

const cred = require('../../fixtures/Credentials.json')
const entranceData = require('../../fixtures/Entrance.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     }); 
    it('NEET Exam',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/resource/getContentUrl"
        }).as('ContentUrl')
        cy.Curriculum()
        EntrancePage.getNEETexam()
            .click({force:true})
        EntrancePage.getSubChemistry()
            .click()    
        EntrancePage.getSubPhysics()
            .click()
        EntrancePage.getExamChapter()
            .contains(entranceData.EntrancChpter)
        EntrancePage.getExamConcepts()
            .click()
        cy.contains(entranceData.RelatedChapter)
            .click()
        cy.wait('@PageActivityData')
        cy.contains('>')
            .click()// next pdf page
        cy.contains('+')
            .click()
        cy.contains(entranceData.FitPage)
            .click()
        EntrancePage.getNavigateback()
            .click()
    })
    it('EAMCET',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/resource/getContentUrl"
        }).as('ContentUrl')
        EntrancePage.getEAMCETexam()
            .click({force:true})
        EntrancePage.getSubMathematics1()
            .click()
        EntrancePage.getSubChemistry1()
            .click()    
        EntrancePage.getSubPhysics1()
            .click()
        EntrancePage.getExamChapter2()
            .contains(entranceData.EntrancChpter1)
        EntrancePage.getExamConcepts1()
            .click({force:true})
        cy.contains(entranceData.RelatedChapter1)
            .click()
        cy.wait('@PageActivityData')
        cy.contains('>')
            .click()// next pdf page
        cy.contains('+')
            .click()
        cy.contains(entranceData.FitPage)
            .click()
        EntrancePage.getNavigateback()
            .click()
    })
    it('IIT-JEE Mains',function() {
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/resource/getContentUrl"
        }).as('ContentUrl')
        EntrancePage.getIITexam()
            .click({force:true})
        EntrancePage.getSubMathematics()
            .click()
        EntrancePage.getSubChemistry()
            .click()    
        EntrancePage.getSubPhysics()
            .click()
        EntrancePage.getExamChapter1()
            .contains(entranceData.EntrancChpter)
        EntrancePage.getExamConcepts()
            .click()
        cy.contains(entranceData.RelatedChapter)
            .click()
        cy.wait('@PageActivityData')
        cy.contains('>')
            .click()// next pdf page
        cy.contains('+')
            .click()
        cy.contains(entranceData.FitPage)
            .click()
        EntrancePage.getNavigateback()
            .click()
    })
    it('Logout', ()=>{
        cy.Logout()
    })
})    