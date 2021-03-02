/*
Author: Murali
*/
/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

    it('Login Test case',function() {


        cy.visit('demo-app.erudex.com')
        // login
        cy.get('.login-form > [type="text"]').type('Yannamaneni')
          
        cy.get('.login-form > .ng-pristine').type('Murali3628')
          
        cy.contains('Sign In').click({multiple: true})
    
          
    })
    
    it('opening Assessments ',function() {    
        // Assessments
          
        cy.get('.icon-assessment.dash-img').click({ multiple: true })
        cy.wait(2000)
        cy.get('.Botany').click()
        
    })
    
    it('Creating Assessments',function() {
    
            cy.contains('New').click()
        cy.get(':nth-child(3) > .small-7 > .ng-pristine').type('New PT Test 5')
    
        // Multiple DropDowns at same place
        cy.get('select').eq(2).select('6').contains('7. Bacteria')
          
        cy.get('select').eq(3).select('0').contains('5')
    
        //cy.contains('Cancel').click()
        //cy.get('.row > .e-button').click({ multiple: true })
        cy.get('input.e-button').click()
          
    })
})    