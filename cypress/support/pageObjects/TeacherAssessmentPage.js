class TeacherAssessmentPage {
    getAssessmentName(){
        return cy.get('input#assessmentName')
    }
    getClass(){
        return cy.get(':nth-child(6) > .form-control')
    }
    getSubject(){
        return cy.get('[ng-show="createInput.languageId === languageConstants.ENGLISH"]')
    }
    getDifficulty(){
        return cy.get(':nth-child(10) > .form-control')
    }
    getManualSelection(){
        return cy.get('.e-button.radius[ng-click="selectMethod(genMethod.manual)"]')
    }
    getQuestionsTable(){
        return cy.get('.table-sticky-header.has-form > table.f-table.striped tbody .ng-scope > .no-select > .e-button.radius.ng-binding', {timeout:10000})
    }
    //Murali
    getOkay(){
        return cy.get('[ng-click="okay()"]')
    }
    getCreateandPush()
    {
        return cy.get('[ng-click="createAndPush()"]')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getPushCalender1()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getDateandTime()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getCalenderHour()
    {
        return cy.get('.hour:nth-child(18)')
    }
    getCalenderMinute()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getPushCalender2()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getDateandTime1()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getCalenderHour1()
    {
        return cy.get('.hour:nth-child(22)')
    }
    getCalenderMinute1()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getCancel()
    {
        return cy.get('[ng-click="cancelPush()"]')
    }


}

export default TeacherAssessmentPage;
