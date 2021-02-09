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
    it('Timeline',function() {
        const TeacherOBJ = new Teacherobj()
        TeacherOBJ.getCurriculam().click()
        cy.wait(3000)
        TeacherOBJ.getTimeline().click()
        cy.wait(2000)
        TeacherOBJ.getLastweek().click()
        cy.wait(2000)
        TeacherOBJ.getThisMonth().click()
        cy.wait(2000)
        TeacherOBJ.getnext().click()
        cy.wait(2000)
        TeacherOBJ.getprevious().click()
        cy.wait(2000)
        TeacherOBJ.getThisweek().click()    
        TeacherOBJ.getLogOut().click({force: true})
    })    
    
})    