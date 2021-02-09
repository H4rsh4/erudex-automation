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
it('Curriculam page',function() {
    const TeacherOBJ = new Teacherobj()
    // curriculam tab
    TeacherOBJ.getCurriculam().click()
    cy.wait(3000)
    TeacherOBJ.getGrades().click({force: true})    
    TeacherOBJ.getSubChemistry().click()
    cy.wait(3000)
    TeacherOBJ.getSubMathematics().click()
    cy.wait(3000)
    TeacherOBJ.getSubPhysics().click()
    cy.wait(3000)
    // open and close chapter contents
    TeacherOBJ.getarrowleft().click()
    TeacherOBJ.getarrowleft().click()
    // refresh page
    TeacherOBJ.getrefresh().click()
    cy.wait(3000)
    TeacherOBJ.getLessonDocument().click({ force: true })
    cy.wait(10000)
    TeacherOBJ.getPdfNext().click()
    cy.wait(2000)
    TeacherOBJ.getPdfZoomOut().click()
    cy.wait(2000)
    TeacherOBJ.getPdfZoomIn().click()
    cy.wait(2000)
    TeacherOBJ.getPdfFitpage().click()
    // Chapter Content
    TeacherOBJ.getChapterContent().click()
    cy.wait(2000)
    TeacherOBJ.getchaptercontentclose().click()
    cy.wait(2000)
    // features
    TeacherOBJ.getChapterFeature().click()
    cy.wait(2000)  
    // notes
    TeacherOBJ.getChapterNotes().click()
    cy.wait(3000)
    TeacherOBJ.getNotesArea().click()
    cy.wait(3000)
    TeacherOBJ.getNotesTyping().type(this.data.videoNotes)
    cy.wait(3000)
    TeacherOBJ.getSaveNote().click()
    cy.wait(3000)
    TeacherOBJ.getNavigateback().click()
    //
    cy.wait(2000)
    TeacherOBJ.getLogOut().click({force: true})
})
})