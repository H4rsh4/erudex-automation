/*
Author: Murali
*/
/// <reference types="Cypress" />
import Upload from '../../support/pageObjects/Upload'
const upload = new Upload()
const uplodng = require('../../fixtures/Murali/UPLOAD.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(uplodng.TeacherUserName,
            uplodng.TeacherPassword);
     });        
    it('Upload content',function() {
        cy.Curriculum()
        upload.getUploadContent()
            .click()
        upload.getContentName()
            .type(uplodng.Content)
        upload.getClass()
            .contains(uplodng.ContentCls)
        upload.getSubject()
            .contains(uplodng.Subject)
        upload.getChapter()
            .contains(uplodng.ContentChpter)
        cy.wait(1000)    
        upload.getTopics()
            .contains(uplodng.ContentTopic)
                .click({force: true})
        cy.wait(1000)
        upload.getTopics()
            .contains(uplodng.ContentSubTopic)
                .click({force: true})
        upload.getDescription()
            .type(uplodng.Content)
        upload.getConcept()
            .type(uplodng.Content)
        upload.getCheckbox()
            .check()
                .should('be.checked')  
        cy.Logout()
    })    
})    