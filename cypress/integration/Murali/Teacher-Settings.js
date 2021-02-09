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
    it('Settings',function() {
        const TeacherOBJ = new Teacherobj()
        TeacherOBJ.getCurriculam().click()
        cy.wait(3000) 
        TeacherOBJ.getSettings().click()
        cy.wait(2000)
        TeacherOBJ.getCurrPasswd().type(this.data.name)
        cy.wait(2000)
        TeacherOBJ.getNewPasswd().type(this.data.pwd)
        cy.wait(2000)
        TeacherOBJ.getVerifyPasswd().type(this.data.pwd)
        cy.wait(2000)
        TeacherOBJ.getCheckbox().check()  
        TeacherOBJ.getSettingsCls().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getSettingsSectn().contains(this.data.Section)
        cy.wait(2000)
        TeacherOBJ.getStudntSettngs().contains(this.data.pwdUser)
        cy.wait(2000) 
        TeacherOBJ.getCancelSettings().click()
    
        TeacherOBJ.getFeedbackIcon().click()
        TeacherOBJ.getFeedback().type(this.data.Description)
        TeacherOBJ.getCancelFeedback().click()
    
        TeacherOBJ.getLogOut().click({force: true})
    })    
    
})    