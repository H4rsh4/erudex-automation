/// <reference types="Cypress" />
import Upload from '../../support/pageObjects/Upload'
const UploadPage = new Upload()

const cred = require('../../fixtures/Credentials.json')
const uploadData = require('../../fixtures/UPLOAD.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     });        
    it('Upload content',function() {
        cy.intercept({
            pathname: "/user/getUserCurriculum"
        }).as('Curriculum')
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
	    cy.intercept({
            pathname: "/ErudexWebService/rest/user/getSectionsForTeacherByGrade"
        }).as('TeacherByGrade')
        cy.Curriculum()
        cy.wait('@Curriculum')
        UploadPage.getUploadContent()
            .click()
        UploadPage.getContentName()
            .type(uploadData.Content)
        UploadPage.getClass()
            .contains(uploadData.ContentCls)
        cy.wait('@TeacherByGrade')
        UploadPage.getSubject()
            .contains(uploadData.Subject)
        UploadPage.getChapter()
            .contains(uploadData.ContentChpter)
        cy.wait(1000)    
        UploadPage.getTopics()
            .contains(uploadData.ContentTopic)
                .click({force: true})
        cy.wait(1000)
        UploadPage.getTopics()
            .contains(uploadData.ContentSubTopic)
                .click({force: true})
        UploadPage.getDescription()
            .type(uploadData.Content)
        UploadPage.getConcept()
            .type(uploadData.Content)
        UploadPage.getCheckbox()
            .check()
                .should('be.checked')
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    