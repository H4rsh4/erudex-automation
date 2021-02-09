/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    before(function() {
        cy.fixture('ConstVarbl').then(function(data) {
                this.data=data  })
      })

    it('Login ',function() {    

        cy.visit(this.data.URL)
        // login
        cy.get('.login-form > [type="text"]').type('erudt.01')
        cy.get('.login-form > .ng-pristine').type('erudt.01')
        cy.contains('Sign In').click({multiple: true})
        
        cy.get('.success').click()        
        
    })
it('Create Assignment',function() {
    cy.get('.icon-curriculum.dash-img').click()
    cy.wait(1000)
    cy.get('#dropdownAssignment').find('li > [ui-sref="assignmentView"]').click({force: true})
    cy.wait(2000)
    cy.get('select').eq(1).select('0').contains('Class 10')
    cy.wait(2000)
    cy.get('select').eq(2).select('1').contains('English')
    cy.wait(2000)
    cy.get('select').eq(3).select('3').contains('4 . Films And Theatre')
    cy.wait(2000)
    cy.get('select').eq(4).select('0').contains('Created Date')
    cy.wait(2000)
    cy.get('.fa-calendar').eq(0).click()
    cy.wait(2000)
    cy.get('.datepicker .datepicker-days .table-condensed tr:nth-child(3) td').contains('13').click()
    cy.wait(2000)
    cy.get('.fa-calendar').eq(1).click()
    cy.wait(2000)
    cy.get('.datepicker .datepicker-days .table-condensed tr:nth-child(3) td').contains('15').click()
    cy.wait(2000)
    cy.get('[ng-click="showPushedAssignments()"]').click()
    cy.wait(2000)
    cy.get('.fa-power-off').click({force: true})
})
})