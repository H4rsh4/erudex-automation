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
    it('Upload content',function() {
        TeacherOBJ.getCurriculam()
            .click()
        TeacherOBJ.getUploadContent()
            .click()
        TeacherOBJ.getUploadContentName()
            .type(Constvarbl.Content)
        TeacherOBJ.getClassUpload()
            .contains(Constvarbl.ContentCls)
        TeacherOBJ.getSubjUpload()
            .contains(Constvarbl.Subject)
        TeacherOBJ.getChaperUpload()
            .contains(Constvarbl.ContentChpter)
        cy.wait(1000)    
        TeacherOBJ.getTopicsUpload()
            .contains(Constvarbl.ContentTopic)
                .click({force: true})
        cy.wait(1000)
        TeacherOBJ.getTopicsUpload()
            .contains(Constvarbl.ContentSubTopic)
                .click({force: true})
        TeacherOBJ.getDescriptionUplod()
            .type(Constvarbl.Content)
        TeacherOBJ.getConceptupload()
            .type(Constvarbl.Content)
        TeacherOBJ.getCheckbox()
            .check()
                .should('be.checked')  
        cy.Logout()
    })    
})    