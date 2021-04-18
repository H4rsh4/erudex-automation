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
        cy.intercept({
            pathname: "/user/getUserCurriculum"
        }).as('Curr-Data')
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
        cy.intercept({
            pathname: "/ErudexWebService/rest/goal/getTargetGoalDetail"
        }).as('TargetGoalDetail')
        cy.Curriculum()  
        GoalsPage.getGoals()
            .click()
        GoalsPage.getClass()
            .contains(goalData.Class)
        cy.wait('@Curr-Data')
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
        cy.wait('@PageActivityData')
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
        cy.wait('@TargetGoalDetail')
    })
    it('Logout', ()=>{
        cy.Logout()
    })       
})    