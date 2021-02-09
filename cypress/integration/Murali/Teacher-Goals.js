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
    
    it('Goals',function() {
        const TeacherOBJ = new Teacherobj()
    // curriculam tab
        TeacherOBJ.getCurriculam().click()
        TeacherOBJ.getGoals().click()
        TeacherOBJ.getGoalClass().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getGoalsubj().contains(this.data.Subject)
        cy.wait(2000)
        TeacherOBJ.getGoalsection().contains(this.data.Section)
        cy.wait(2000)
        cy.get('tr td:nth-child(3)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("A"))
            {
                $e1.click()
            }
        })
        TeacherOBJ.getGoalName().type(this.data.name)
        TeacherOBJ.getGoaldropdwn1().contains(this.data.Goal1)
        cy.wait(2000)
        TeacherOBJ.getSetall().click({ multiple: true })
        cy.wait(2000)
        TeacherOBJ.getGoaldropdwn2().contains(this.data.Goal2)
        cy.wait(2000)
        TeacherOBJ.getSetall().click({ multiple: true })
        cy.wait(2000)
        TeacherOBJ.getGoaldropdwn3().contains(this.data.Goal3)
        cy.wait(2000)
        TeacherOBJ.getSetall().click({ multiple: true })
        cy.wait(2000)
        TeacherOBJ.getsavegoal().click()
        cy.wait(2000)
        TeacherOBJ.getLogOut().click()
    })       
    
})    