/// <reference types="Cypress" />
import LiveCls from '../../support/pageObjects/LiveClass'
import 'cypress-wait-until';
const livecls = new LiveCls()
const liveclas = require('../../fixtures/Liveclass.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(liveclas.TeacherUserName,
            liveclas.TeacherPassword);
        // cy.get('.success').click()
      });
    it('Reach-Grade', ()=>{
        cy.intercept({
            pathname: "/ErudexWebService/rest/live-class/getMeetings"
        }).as('LC-Data')
        cy.intercept({
            pathname: "/ErudexWebService/rest/live-class/updateMeeting"
        }).as('updateMeeting')
        cy.intercept({
            pathname: "/user/getUserCurriculum"
        }).as('Curr-Data')
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
        cy.intercept({
            pathname: "/ErudexWebService/rest/user/getSectionsForTeacherByGrade"
        }).as('TeacherByGrade')
      
        //cy.waitForResourceToLoad()
        cy.get(".dash-blk > .icon-live-classes").click();
        cy.wait('@Curr-Data')
        //cy.waitUntil(() => true);
        cy.get(".nice-select").find("ul.list > li").contains('CBSE-Class 12').click({force:true});
        cy.waitUntil(() => true);

        cy.get('ul li.option').contains('Apr 2021').click({force:true})
        cy.wait('@LC-Data')

        cy.get('.date-selector').contains('08 - 14').click()
        cy.wait('@LC-Data')

        cy.get('.date-selector').contains('15 - 21').click()
        cy.wait('@LC-Data')

        cy.get('.date-selector').contains('22 - 28').click()
        cy.wait('@LC-Data')

        //cy.waitUntil(() => true);
        
        cy.get('[ui-sref="liveClasses.create"]').click();
        cy.wait('@PageActivityData')

        cy.get('select').eq(1).select('0').contains('Cbse-English')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.get('select').eq(2).select('1').contains('Class 12')
        cy.wait('@TeacherByGrade')

        cy.get('select').eq(3).select('3').contains('Physics')

        livecls.getChapter()
            .contains(liveclas.Chapter)
        livecls.getStartCalender()
            .click()
        livecls.getActiveDate(liveclas.pushDate1)
            .click()
        livecls.getCalenderHour(liveclas.pushHour1)
            .click()
        livecls.getCalenderMinute(liveclas.pushMin1)
            .click()
        livecls.getDuration()
            .contains(liveclas.Duration)
                .click({force: true})
        livecls.getCheckbox()
            .check()
                .should('be.checked')
        livecls.getSchedule()
            .click()
        cy.wait('@LC-Data')

        cy.get('.limit').contains('Physics').click()
        cy.wait('@LC-Data')

        cy.get(':nth-child(2) > .details-col > .heading-wrapper > .card-actions > [ng-click="onEdit(meet)"] > .fa').click()
        cy.wait('@TeacherByGrade')

        cy.get('.button').contains('Reschedule').click()
        cy.wait('@updateMeeting')
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})
    