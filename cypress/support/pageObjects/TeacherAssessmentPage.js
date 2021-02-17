class TeacherAssessmentPage {
    getAssessmentList(){
        return cy.get('a[ui-sref="assessmentList"]').eq(0)
    }
    getPushedAssessments(){
        return cy.get('[ng-click="showPushedAssessments()"]')
    }
    getFirstAssignment(){
        return cy.get('tr.ng-scope:nth-child(1) > td.ng-binding:nth-child(2)')
    }
    assertName($obj,name){
        let tex = $obj.text()
      tex = (tex.slice(tex.indexOf('\n')+2, tex.lastIndexOf('\n'))).trim()
      expect(tex).to.eq(name)
    }
    getAssessmentName(){
        return cy.get('input#assessmentName')
    }
    getClass(Class){
        return cy.get(':nth-child(6) > .form-control').select(Class)
    }
    getSubject(subject){
        return cy.get('[ng-show="createInput.languageId === languageConstants.ENGLISH"]').select(subject)
    }
    getDifficulty(diff){
        return cy.get(':nth-child(10) > .form-control').select(diff)
    }
    getManualSelection(){
        return cy.get('.e-button.radius[ng-click="selectMethod(genMethod.manual)"]')
    }
    getQuestionsTable(){
        return cy.get('.table-sticky-header.has-form > table.f-table.striped tbody .ng-scope > .no-select > .e-button.radius.ng-binding', {timeout:10000})
    }
    getOkay(){
        return cy.get('[ng-click="okay()"]')
    }
    getCreateandPush()
    {
        return cy.get('[ng-click="createAndPush()"]')
    }
    getPush(){
        return cy.get('[ng-click="submitPush()"]')
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
    getActiveDate(date){
        return cy.get('td.day:not(.disabled):not(.future):not(.past)').contains(String(date))
    }
    getCalenderHour()
    {
        return cy.get('.hour:nth-child(18)')
    }
    getCalenderMinute()
    {
        return cy.get('.minute:nth-child(10)')
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
