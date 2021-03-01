/// <reference types="Cypress" />
import Timeline from '../../support/pageObjects/Timeline'
const TimelinePage = new Timeline()

const cred = require('../../fixtures/Credentials.json')
const timelineData = require('../../fixtures/Timeline.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     }); 
    it('Timeline',function() {
        cy.Curriculum()
        TimelinePage.getTimeline()
            .click()
        TimelinePage.getLastweek()
            .click()
        TimelinePage.getThisMonth()
            .click()
        TimelinePage.getnext()
            .click()
        TimelinePage.getprevious()
            .click()
        TimelinePage.getThisweek()
            .click()    
        //cy.Logout()
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    