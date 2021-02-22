class Assessments
{
    getusername()
    {
        return cy.get('.login-form > [type="text"]')
    }
    getpassword()
    {
        return cy.get('.login-form > .ng-pristine')
    }
    getSignin()
    {
        return cy.contains('Sign In')
    }
    getAssessmentsTab()
    {
        return cy.get('.icon-assessment.dash-img')
    }
    getSubject()
    {
        return cy.get('.Botany')
    }
    getCreateNewAssesment()
    {
        return cy.contains('New')
    }
    getAssessmentsName()
    {
        return cy.get(':nth-child(3) > .small-7 > .ng-pristine')
    }
    getDropdown()
    {
        return cy.get('select')
    }
    getCancelAssesment()
    {
        return cy.contains('Cancel')
    }
    getCreateAssessment()
    {
        return cy.get('input.e-button')
    }
    getAssessmentOption1()
    {
        return cy.get('#option_1')
    }
    getMarkForReviewandNext()
    {
        return cy.contains('Mark For Review & Next')
    }
    getSaveandMarkForReview()
    {
        return cy.contains('Save & Mark for Review')
    }
    getSaveandNext()
    {
        return cy.contains('Save & Next')
    }
    getAssessmentOption2()
    {
        return cy.get('#option_2')
    }
    getAssessmentOption3()
    {
        return cy.get('#option_3')
    }
    getAssessmentOption4()
    {
        return cy.get('#option_4')
    }
    getSubmitTest()
    {
        return cy.get('.pull-right')
    }
    getAllQuestions()
    {
        return cy.get('.tabs > [heading="All(5)"] > .ng-binding')
    }
    getCorrectQuestions()
    {
        return cy.get('.c3-target-Correct > .c3-shapes >.c3-shape')
    }
    
    getIncorrectQuestions()
    {
        return cy.get('.c3-target-Incorrect > .c3-shapes >.c3-shape')
    }
    getNotAttemptedQuestions()
    {
        return cy.get('.c3-target-Not-Attempted > .c3-shapes >.c3-shape')
    }
    getBackbutton()
    {
        return cy.get('#navBackBtn')
    }
    getAllTab()
    {
        return cy.get('.tabs > [heading="All(5)"] > .ng-binding')
    }
    getCorrectTab()
    {
        return cy.get('.c3-target-Correct > .c3-shapes >.c3-shape')
    }
    getIncorrectTab()
    {
        return cy.get('.c3-target-Incorrect > .c3-shapes >.c3-shape')
    }
    getNotAttemptedTab()
    {
        return cy.get('.c3-target-Not-Attempted > .c3-shapes >.c3-shape')
    }
    getSumofAll()
    {
        return cy.get('dd.ng-isolate-scope:nth-child(1)')
    }
    getSumofIncorrect()
    {
        return cy.get('dd.ng-isolate-scope:nth-child(2)')
    }
    getSumofCorrect()
    {
        return cy.get('dd.ng-isolate-scope:nth-child(3)')
    }
    getSumofNotAttempted()
    {
        return cy.get('dd.ng-isolate-scope:nth-child(4)')
    }
    getSumofMarked()
    {
        return cy.get('dd.ng-isolate-scope:nth-child(5)')
    }
    getLogout()
    {
        cy.get('.fa.fa-power-off')
    }
}
export default Assessments