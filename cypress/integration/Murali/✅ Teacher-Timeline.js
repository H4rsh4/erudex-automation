/*
Author: Murali

*/
/// <reference types="Cypress" />
import Timeline from '../../support/pageObjects/Timeline'
const timeline = new Timeline()
const time = require('../../fixtures/Murali/Timeline.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(time.TeacherUserName,
            time.TeacherPassword);
     }); 
    it('Timeline',function() {
        cy.Curriculum()
        timeline.getTimeline()
            .click()
        timeline.getLastweek()
            .click()
        timeline.getThisMonth()
            .click()
        timeline.getnext()
            .click()
        timeline.getprevious()
            .click()
        timeline.getThisweek()
            .click()    
        cy.Logout()
    })    
})    