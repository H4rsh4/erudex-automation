/// <reference types="Cypress" />
import Assessments from'../../support/pageObjects/Assessments'
const Assessment = new Assessments()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.Username,
            Constvarbl.Password);
     });
it('opening Assessments ',function() {    
    Assessment.getAssessmentsTab()
        .click({ multiple: true })
    Assessment.getSubject()
        .click()    
})
it('Creating Assessments',function() {
    Assessment.getCreateNewAssesment()
        .click()
    Assessment.getAssessmentsName()
        .type('Self-Test-Practise-3')
    // Multiple DropDowns at same place
    Assessment.getDropdown()
        .eq(2)
            .select('6')
                .contains('7. Bacteria')
    Assessment.getDropdown()
        .eq(3)
            .select('0')
                .contains('5')
    Assessment.getCreateAssessment()
        .click()
})
it('Taking the Assessment Exam ',function() {
    Assessment.getAssessmentOption1()
        .check({force: true})
            .should('be.checked')
    Assessment.getMarkForReviewandNext()
        .click()
    Assessment.getAssessmentOption2()
        .check({force: true})
            .should('be.checked')
    Assessment.getSaveandMarkForReview()
        .click()
    Assessment.getAssessmentOption3()
        .check({force: true})
            .should('be.checked')
    Assessment.getSaveandNext()
        .click()
    Assessment.getAssessmentOption4()
        .check({force: true})
            .should('be.checked')
    Assessment.getMarkForReviewandNext()
        .click()
    Assessment.getSubmitTest()
        .click()
    cy.get('.success')
        .click()
})
it('opening Assessments Test case',function() {    
    // going back to Assessments dashboard
    Assessment.getBackbutton().click()
    // opening assesments from dashboard
    cy.contains('Self-Test-1')
        .click()  // oprning test from assessment dashboard
})
it('Assessing All questions Tabs',function() {    
    Assessment.getAllTab()
        .click()
    Assessment.getCorrectTab()
        .click({force: true})
    Assessment.getIncorrectTab()
        .click({force: true})
    Assessment.getNotAttemptedTab()
        .click({force: true})
})
it('Sum of all', function(){
    // adding all questions to equal the total no of questions attempted
    var sum = 0
    Assessment.getSumofIncorrect().each(($el) => {
        const all=$el.text()
        var res= all.split(" ")
        res= res[2].trim('').replace("Incorrect(","").replace(")","");
        sum= Number(sum)+Number(res)
    }).then(function()
    {
            cy.log(sum)
    })
    Assessment.getSumofCorrect().each(($el) => {
        const all=$el.text()
        var res= all.split(" ")
        res= res[2].trim('').replace("Correct(","").replace(")","");
        sum= Number(sum)+Number(res)
    }).then(function()
    {
            cy.log(sum)
    })
    Assessment.getSumofNotAttempted().each(($el) => {
        const all=$el.text()
        var res= all.split(" ")
        res= res[3].trim('').replace("Attempted(","").replace(")","");
        sum= Number(sum)+Number(res)
    }).then(function()
    {
            cy.log(sum)
    })
    Assessment.getSumofMarked().each(($el) => {
        const all=$el.text()
        var res= all.split(" ")
        res= res[3].trim('').replace("Marked(","").replace(")","");
        sum= Number(sum)+Number(res)
    }).then(function()
    {
            cy.log(sum)
    })
    Assessment.getSumofAll().then(function(e1)
    {
        const allqstns=e1.text()
        var res= allqstns.split(" ")
        var total = res[2].trim().replace("All(","").replace(")","")
        expect(Number(total)).to.equal(sum)
        cy.log(total)
    })
})
it('Logout', ()=>{
    cy.Logout()
})
})