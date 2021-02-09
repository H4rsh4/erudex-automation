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
    
    it('Grade-book',function() {
        const TeacherOBJ = new Teacherobj()
    // curriculam tab
        TeacherOBJ.getCurriculam().click()
        TeacherOBJ.getGradebook().click()
        cy.wait(2000)
        TeacherOBJ.getGradeClass().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getGradesection().contains(this.data.Section)
        cy.wait(2000)
        TeacherOBJ.getGradesubj().contains(this.data.GradeSubj)
        cy.wait(2000)
        TeacherOBJ.getGradetype().contains(this.data.GradeType)
        cy.wait(2000)
        cy.contains(this.data.AddAssess).click()
        cy.wait(2000)
        TeacherOBJ.getGradeChapter().contains(this.data.gradechapter)
        cy.wait(2000)
        TeacherOBJ.getAssesmName().type(this.data.AssessName)
        cy.wait(2000)
        TeacherOBJ.getCalender1().click()
        cy.wait(2000)
        TeacherOBJ.getDate().contains(this.data.Date1).click()
        cy.wait(2000)
        TeacherOBJ.getCalender2().click()
        cy.wait(2000)
        TeacherOBJ.getDate().contains(this.data.Date2).click()
        cy.wait(2000)
        TeacherOBJ.getGrademarks().contains(this.data.Marks)
        cy.wait(2000)
        cy.contains(this.data.CreateNdPush).click()
        cy.wait(2000)
        TeacherOBJ.getLogOut().click({force: true})
    })    
    
})    