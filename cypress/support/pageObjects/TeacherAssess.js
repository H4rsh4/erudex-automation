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
    getLanguage()
    {
        return cy.get('select').eq(1).select('0')
    }
    getClass()
    {
        return cy.get('select').eq(2).select('0')
    }
    getSubject()
    {
        return cy.get('select').eq(3).select('0')
    }
    getLevelDifficulty()
    {
        return cy.get('select').eq(5).select('1')
    }
    getDuration()
    {
        return cy.get('select').eq(6).select('0')
    }
    getMarks()
    {
        return cy.get('select').eq(7).select('0')
    }
    getName()
    {
        return cy.get('[ng-model="filter.name"]')
    }
    getLevel()
    {
        return cy.get('select').eq(10).select('0')
    }
    getOwner()
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
    getSelectQstns()
    {
        return cy.get('[ng-click="addQuestions()"]')
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
    getViewAssessment()
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
    getViewClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getViewSubject()
    {
        return cy.get('select').eq(2).select('2')
    }
    getViewChapter()
    {
        return cy.get('select').eq(3).select('0')
    }
    getViewDate()
    {
        return cy.get('select').eq(4).select('0')
    }
    getPushedAssessment()
    {
        return cy.get('[ng-click="showPushedAssessments()"]')
    }
    getPushedContent()
    {
        return cy.get('tr td:nth-child(3)')
    }
    getCalender1()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getDate()
    {
        return cy.get('.datepicker .datepicker-days .table-condensed tr:nth-child(3) td')
    }
    getCalender2()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getcloseDialog()
    {
        return cy.get('[ng-click="closeThisDialog()"]')
    }
    getCreateandPush()
    {
        return cy.get('[ng-click="createAndPush()"]')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getStartCalender()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getEndCalender()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getDateandTime()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getDateandTime1()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getCalenderHour()
    {
        return cy.get('.hour:nth-child(18)')
    }
    getCalenderHour1()
    {
        return cy.get('.hour:nth-child(22)')
    }
    getCalenderMinute()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getCalenderMinute1()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getCancel()
    {
        return cy.get('[ng-click="cancelPush()"]')
    }
    getBack()
    {
        return cy.get('[ng-click="goBack()"]')
    }
}
export default TeacherAssess