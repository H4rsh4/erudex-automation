/// <reference types="Cypress" />
import Teacherobj from '../../support/pageObjects/Teacherobj'

describe('My First Test Suite', function() 
{
    beforeEach(function() {
        cy.fixture('ConstVarbl').then(function(data) {
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
    it('EntranceExamPractise',function() {
        const TeacherOBJ = new Teacherobj()
        TeacherOBJ.getCurriculam().click()
        cy.wait(3000)
        TeacherOBJ.getEntranceExam().click()
        cy.wait(2000)
        TeacherOBJ.getSubPhysics().click()
        cy.wait(2000)
        TeacherOBJ.getSubMathematics().click()
        cy.wait(2000)
        TeacherOBJ.getEntranceExamChapter().contains(this.data.EntrancChpter)
        cy.wait(2000)
        TeacherOBJ.getEntranceExamConcepts().click()
        cy.wait(2000)
        cy.contains(this.data.RelatedChapter).click()
        cy.wait(2000)
        cy.contains('>').click({force: true})// next pdf page
        cy.wait(2000)
        cy.contains('+').click({force: true})
        cy.wait(2000)
        cy.contains('Fit Page').click()
        cy.wait(2000)
        TeacherOBJ.getNavigateback().click()
        cy.wait(2000)
        TeacherOBJ.getLogOut().click({force:true})
    })
})    