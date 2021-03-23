/// <reference types="Cypress" />
import Grade from '../../support/pageObjects/Grade'
import 'cypress-wait-until';
const grade = new Grade()
const grading = require('../../fixtures/Grading.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.intercept({
            pathname: "/user/validateUser"
        }).as('validateUser')
        cy.Signin(grading.TeacherUserName,
                  grading.TeacherPassword);
        cy.wait('@validateUser')          
        cy.get('.success').click()
        
      });
    it('Reach-Grade', ()=>{
        cy.intercept({
            pathname: "/ErudexWebService/rest/live-class/getMeetings"
        }).as('LC-Data')
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
        cy.wait('@LC-Data')
        //cy.waitUntil(() => true);
        cy.get(".nice-select").find("ul.list > li").contains('CBSE-Class 12').click({force:true});
        cy.waitUntil(() => true);

        cy.get('ul li.option').contains('Apr 2021').click({force:true})
        cy.wait('@PageActivityData')

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
        
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})
    