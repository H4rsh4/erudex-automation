/// <reference types="Cypress" />
import Teacherobj from '../../support/pageObjects/Teacherobj'

describe('My First Test Suite', function() 
{
    beforeEach(function() {
        cy.fixture('Assessment').then(function(data) {
                this.data=data  })
      })

    it('Login ',function() {    
        const TeacherOBJ = new Teacherobj()
        cy.visit(this.data.URL)
        // login
        TeacherOBJ.getusername().type(this.data.TeacherUserName)
        TeacherOBJ.getpassword().type(this.data.TeacherPassword)
        TeacherOBJ.getSignin().click({multiple: true})
        TeacherOBJ.getSuccess().click()        
        
    })       
    it('Upload content',function() {
        const TeacherOBJ = new Teacherobj()
        TeacherOBJ.getCurriculam().click()
        cy.wait(3000) 
        TeacherOBJ.getUploadContent().click()
        cy.wait(2000)
        TeacherOBJ.getUploadContentName().type(this.data.Content)
        cy.wait(2000)
        TeacherOBJ.getClassUpload().contains(this.data.ContentCls)
        cy.wait(2000)
        TeacherOBJ.getSubjUpload().contains(this.data.Subject)
        cy.wait(2000)
        TeacherOBJ.getChaperUpload().contains(this.data.ContentChpter)
        cy.wait(2000)
        TeacherOBJ.getTopicsUpload().contains(this.data.ContentTopic).click({force: true})
        cy.wait(2000)
        TeacherOBJ.getTopicsUpload().contains(this.data.ContentSubTopic).click({force: true})
        cy.wait(2000)
        TeacherOBJ.getDescriptionUplod().type(this.data.Content)
        cy.wait(2000)
        TeacherOBJ.getConceptupload().type(this.data.Content)
        cy.wait(2000)
        TeacherOBJ.getCheckbox().check().should('be.checked')
   
        TeacherOBJ.getLogOut().click({force: true})
    })    
    
})    