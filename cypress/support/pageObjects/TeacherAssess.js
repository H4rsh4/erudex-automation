//Author: Murali
class TeacherAssess
{
    getCreateAssessment()
    {
        return cy.get('#dropdownAssessment').find('[ui-sref="assessmentCreate"]')
    }
    getAssessmentName()
    {
        return cy.get('#assessmentName')
    }
    getAssessLanguage()
    {
        return cy.get('select').eq(1).select('0')
    }
    getAssessClass()
    {
        return cy.get('select').eq(2).select('0')
    }
    getAssessSubj()
    {
        return cy.get('select').eq(3).select('0')
    }
    getAssessDifficulty()
    {
        return cy.get('select').eq(5).select('1')
    }
    getAssessTime()
    {
        return cy.get('select').eq(6).select('0')
    }
    getAssessMarks()
    {
        return cy.get('select').eq(7).select('0')
    }
    getName()
    {
        return cy.get('[ng-model="filter.name"]')
    }
    getAssessLevel()
    {
        return cy.get('select').eq(10).select('0')
    }
    getAssessOwner()
    {
        return cy.get('select').eq(11).select('3')
    }
    getAssessDate()
    {
        return cy.get('select').eq(12).select('0')
    }
    getSelectButton()
    {
        return cy.get(':nth-child(2) > :nth-child(9) > .e-button')
    }
    getCreateNdPush()
    {
        return cy.get('[ng-click="createAndPush()"]')
    }
    getChapter()
    {
        return cy.get('select').eq(12).select('9')
    }
    getTopic()
    {
        return cy.get('select').eq(13).select('2')
    }
    getDifficulty()
    {
        return cy.get('select').eq(14).select('0')
    }
    getSkillType()
    {
        return cy.get('select').eq(15).select('1')
    }
    getPastExam()
    {
        return cy.get('select').eq(17).select('1')
    }
    getExamYear()
    {
        return cy.get('select').eq(18).select('0')
    }
    getquestiontype()
    {
        return cy.get('select').eq(19).select('1')
    }
    getDescription()
    {
        return cy.get('[ng-model="filter.description"]')
    }
    getConcepttype()
    {
        return cy.get('[ng-model="filter.concept"]')
    }
    getAddquestion()
    {
        return cy.get(':nth-child(1) > .no-select > .ng-binding')
    }
    getAddquestion2()
    {
        return cy.get(':nth-child(1) > .no-select > .ng-binding')
    }
    getAddquestion3()
    {
        return cy.get(':nth-child(1) > .no-select > .ng-binding')
    }
    getviewqustn()
    {
        return cy.get(':nth-child(2) > .no-select > [ng-click="viewQuestionHistory(rec.id)"]')
    }
    getOkay()
    {
        return cy.get('[ng-click="okay()"]')
    }
    getquestions()
    {
        return cy.get('select').eq(8).select('0')
    }
    getAutoquestions()
    {
        return cy.get('[ng-click="getQuestions()"]')
    }
    getViewAssess()
    {
        return cy.get('#dropdownAssessment').find('li > [ui-sref="assessmentList"]')
    }
    getAutoselectChapter1()
    {
        return cy.get('ul li li:nth-child(3)')
    }
    getAutoselectChapter2()
    {
        return cy.get('ul li li:nth-child(7)')
    }
    getViewAssessCls()
    {
        return cy.get('select').eq(1).select('0')
    }
    getViewAssessSubj()
    {
        return cy.get('select').eq(2).select('2')
    }
    getViewAssessChapter()
    {
        return cy.get('select').eq(3).select('0')
    }
    getViewAssessDate()
    {
        return cy.get('select').eq(4).select('0')
    }
    getAssessPushed()
    {
        return cy.get('[ng-click="showPushedAssessments()"]')
    }
    getPushedContent()
    {
        return cy.get('tr td:nth-child(3)')
    }
}
export default TeacherAssess