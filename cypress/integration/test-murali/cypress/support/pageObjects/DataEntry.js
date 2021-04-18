class DataEntry
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
    getSuccess()
    {
        return cy.get('.success')
    }
    getCreateAssessment()
    {
        return cy.get('#dropdownAssessment').find('[ui-sref="assessment.create"]')
    }
    getCreateAssess()
    {
        return cy.get('#dropdownAssessment').find('[ui-sref="assessmentCreate"]')
    }
    getNameAssessment()
    {
        return cy.get(':nth-child(1) > :nth-child(2) > .form-control')
    }
    getType()
    {
        return cy.get('select').eq(1).select('0')
    }
    getType1()
    {
        return cy.get('select').eq(1).select('1')
    }
    getCurriculam()
    {
        return cy.get('select').eq(2).select('0')
    }
    getGrade()
    {
        return cy.get('select').eq(3).select('1')
    }
    getSubject()
    {
        return cy.get('select').eq(4).select('3')
    }
    getLevel()
    {
        return cy.get('select').eq(5).select('0')
    }
    getDuration()
    {
        return cy.get('[ng-model="assessment.duration"]')
    }
    getMarks()
    {
        return cy.get('[placeholder="Marks"]')
    }
    getSelectquestions()
    {
        return cy.get('[ng-click="addQuestions()"]')
    }
    getChapter()
    {
        return cy.get('select',{timeout:1000}).eq(13).select('1')
    }
    getChapterQuiz()
    {
        return cy.get('select').eq(6).select('1')
    }
    getQuizTopic()
    {
        return cy.get('select').eq(7).select('5')
    }
    getQuizSubTopic()
    {
        return cy.get('select').eq(8).select('0')
    }
    getTopic()
    {
        return cy.get('select').eq(14).select('5')
    }
    getDifficulty()
    {
        return cy.get('select').eq(15).select('0')
    }
    getSkillType()
    {
        return cy.get('select').eq(16).select('4')
    }
    getUsage()
    {
        return cy.get('select').eq(17).select('0')
    }
    getPastexam()
    {
        return cy.get('select').eq(17).select('0')
    }
    getExamyear()
    {
        return cy.get('select').eq(18).select('0')
    }
    getQstntype()
    {
        return cy.get('select').eq(16).select('0')
    }
    getDescription()
    {
        return cy.get('[ng-model="filter.description"]')
    }
    getConcept()
    {
        return cy.get('[ng-model="filter.concept"]')
    }
    getAddquestion1()
    {
        return cy.get(':nth-child(1) > .no-select > .ng-binding')
    }
    getAddquestion2()
    {
        return cy.get(':nth-child(2) > .no-select > .ng-binding')
    }
    getAddquestion3()
    {
        return cy.get(':nth-child(3) > .no-select > .ng-binding')
    }
    getAddquestion4()
    {
        return cy.get(':nth-child(4) > .no-select > .ng-binding')
    }
    getAddquestion5()
    {
        return cy.get(':nth-child(5) > .no-select > .ng-binding')
    }
    getOK()
    {
        return cy.get('[ng-click="okay()"]')
    }
    getDeleteqstn()
    {
        return cy.get(':nth-child(1) > [ng-show="(vState.isCreate||vState.isEdit)"] > a > img')
    }
    getAddNew()
    {
        return cy.get('[ng-click="addNewQuestion()"]')
    }
    getAddCurriculam()
    {
        return cy.get('select').eq(11).select('0')
    }
    getAddGrade()
    {
        return cy.get('select').eq(12).select('1')
    }
    getAddSubject()
    {
        return cy.get('select').eq(13).select('3')
    }
    getAddChapter()
    {
        return cy.get('select').eq(14).select('1')
    }
    getAddTopic()
    {
        return cy.get('select').eq(15).select('5')
    }
    getAddDifficulty()
    {
        return cy.get('select').eq(16).select('0')
    }
    getAddSkillType()
    {
        return cy.get('select').eq(17).select('4')
    }
    getAddQstntype()
    {
        return cy.get('select').eq(22).select('1')
    }
    getQstntypeAdd1()
    {
        return cy.get('select').eq(22).select('0')
    }
    getNumericDescription()
    {
        return cy.get('#cke_1_contents')
    }
    getNumericAns()
    {
        return cy.get('[ng-model="question.numericAnswer"]')
    }
    getQstnSolution()
    {
        return cy.get(':nth-child(7) > .inline-label > .e-button')
    }
    getAnswer()
    {
        return cy.get('[role="textbox"]').eq(1)
    }
    getQstnHint()
    {
        return cy.get(':nth-child(8) > .inline-label > .e-button')
    }
    getqstnDescription()
    {
        return cy.get('[role="textbox"]').eq(0)
    }
    getHint()
    {
        return cy.get('[role="textbox"]').eq(1)
    }
    getAnswer1()
    {
        return cy.get('[role="textbox"]').eq(1)
    }
    getHint1()
    {
        return cy.get('[role="textbox"]').eq(1)
    }
    getPreview()
    {
        return cy.get('[ng-click="previewQuestion()"]')
    }
    getPreviewSave()
    {
        return cy.get('[ng-click="previewSaveQuestion()"]')
    }
    getSave()
    {
        return cy.get('[ng-click="saveQuestion()"]')
    }
    getClose()
    {
        return cy.get('[ng-click="closeThisDialog()"]')
    }
    getCLOSE()
    {
        return cy.get('[ng-click="close()"]')
    }
    getMCQDescrip1()
    {
        return cy.get('[role="textbox"]').eq(1)
    }
    getMCQDescrip2()
    {
        return cy.get('[role="textbox"]').eq(2)
    }
    getMCQDescrip3()
    {
        return cy.get('[role="textbox"]').eq(3)
    }
    getMCQDescrip4()
    {
        return cy.get('[role="textbox"]').eq(4)
    }
    getRadio()
    {
        return cy.get('[type="radio"]')
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
        return cy.get('select').eq(3).select('3')
    }
    getAssessDifficulty()
    {
        return cy.get('select').eq(5).select('0')
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
    getOwner()
    {
        return cy.get('select').eq(11).select('0')
    }
    getAssessDate()
    {
        return cy.get('select').eq(12).select('0')
    }
    getCalender1()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getDate()
    {
        return cy.get('.datepicker .datepicker-days .table-condensed tr:nth-child(2) td')
    }
    getCalender2()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getStartCalender()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getEndCalender()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getActiveDate(date)
    {
        return cy
          .get("td.day:not(.disabled):not(.future):not(.past)")
          .contains(String(date));
    }
    getCalenderHour(data)
    {
        return cy.get(".hour:not(disabled)").contains(String(data));
    }
    getCalenderMinute(data)
    {
        return cy.get(".minute:not(disabled)").contains(String(data));
    }
    getPushedContent()
    {
        return cy.get('tr td:nth-child(3)')
    }
    getUnPushedData()
    {
        return cy.get('[ng-click="showUnPushedAssessments()"]')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getCreateNdPush()
    {
        return cy.get('[ng-click="createAndPush()"]')
    }
    getSelectButton()
    {
        return cy.get(':nth-child(1) > :nth-child(9) > .e-button')
    }
    getCurriculamTab()
    {
        return cy.get('.icon-curriculum.dash-img')
    }
    getSubmitPush()
    {
        return cy.get('[ng-click="submitPush()"]')
    }
    getSaving()
    {
        return cy.get('[ng-click="saveAssessment()"]')
    }
}

export default DataEntry