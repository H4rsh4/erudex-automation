/// <reference types="Cypress" />
import Goals from '../../support/pageObjects/Goals'
const GoalsPage = new Goals()

const cred = require('../../fixtures/Credentials.json')
const goalData = require('../../fixtures/Goal.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     }); 
    it('Goals',function() {
        cy.Curriculum()  
        GoalsPage.getGoals()
            .click()
        GoalsPage.getClass()
            .contains(goalData.Class)
        GoalsPage.getSubject()
            .contains(goalData.Subject)
        GoalsPage.getSection()
            .contains(goalData.Section)
        cy.get('tr td:nth-child(3)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("A"))
            {
                $e1.click()
            }
        })
        GoalsPage.getGoalName()
            .type(goalData.name)
        GoalsPage.getSelectGoal1()
            .contains(goalData.Goal)
        GoalsPage.getSetall()
            .click({ multiple: true })
        GoalsPage.getSelectGoal2()
            .contains(goalData.Goal)
        GoalsPage.getSetall()
            .click({ multiple: true })
        GoalsPage.getSelectGoal3()
            .contains(goalData.Goal)
        GoalsPage.getSetall()
            .click({ multiple: true })
        GoalsPage.getsavegoal()
            .click()
        //cy.Logout()
    })
    it('Logout', ()=>{
        cy.Logout()
    })       
})    