class Mocktest
{
    getCreateMock()
    {
        return cy.get("#dropdownCompAssessment")
        .find('[ui-sref="compAssessment.create"]')
    }
    getAssessmentName()
    {
        return cy.get('[ng-model="assessment.name"]').first()
    }
    gettestType()
    {
        return cy.get("select.form-control").eq(0)
    }
    getCurriculum()
    {
        return cy.get('[ng-model="assessment.curriculum"]')
    }
    getGrade()
    {
        return cy.get('[ng-model="assessment.grade"]')
    }
    getSubject()
    {
        return cy.get('[ng-model="assessment.subject"]')
    }
    getDifficulty()
    {
        return cy.get('[ng-model="assessment.difficultyLevel"]')
    }
    getDuration()
    {
        return cy.get('[ng-model="assessment.duration"]').clear()
    }
    getScore()
    {
        return cy.get('[ng-model="assessment.totalScore"]').clear()
    }
    getNegativeVal()
    {
        return cy.get('[ng-model="assessment.negativeMarkingValue"]')
        .first()
    }
    getAddNewquestion()
    {
        return cy.get('[ng-click="addNewQuestion()"]')
    }
    getClear()
    {
        return cy.get('[ng-click="clearAllInput()"]')
    }
    getPreview()
    {
        return cy.get('[ng-click="previewQuestion()"]')
    }
    getPreviewSave()
    {
        return cy.get('[ng-click="previewSaveQuestion()"]')
    }
    getPreviewClose()
    {
        return cy.get('[ng-click="closeThisDialog()"]')
    }
    getClose()
    {
        return cy.get('[ng-click="close()"]')
    }
    getSaveQuestion()
    {
        return cy.get('[ng-click="saveQuestion()"]')
    }
    getSelectQuestion()
    {
        return cy.get('[ng-click="addQuestions()"]')
    }
    getallsubject()
    {
        return cy.get('[ng-model="subject"]')
    }
    getApplyFilter()
    {
        return cy.get('[ng-click="applyFilter()"]')
    }
    getClearFilter()
    {
        return cy.get('[ng-click="clearFilter()"]')
    }
    getQuestionsTable() {
        return cy.get(
          ".table-sticky-header.has-form > table.f-table.striped tbody .ng-scope > .no-select > .e-button.radius.ng-binding",
          { timeout: 10000 }
        );
    }
    getOkay() {
        return cy.get('[ng-click="okay()"]');
    }
    getSaveAssessment()
    {
        return cy.get('[ng-click="saveAssessment()"]')
    }
    getViewMock()
    {
        return cy.get("#dropdownCompAssessment")
        .find('[ui-sref="compAssessment.list"]')
    }
    getIncludeErudex()
    {
        return cy.get('[for="include_erudex"]')
    }
    getTeacherAssign()
    {
        return cy.get('[ng-click="teacherAssign(rec, filter)"]')
    }
    getInsitution()
    {
        return cy.get('[ng-model="selectedInstitution"]')
    }
    getTeacher()
    {
        return cy.get('[ng-model="selectedTeacher"]')
    }
    getAssign()
    {
        return cy.get('[ng-click="positiveResponse()"]')
    }
    getManagePublish()
    {
        return cy.get('[ng-click="publishAssessment(rec, filter)"]')
    }
    getSelectInstitute()
    {
        return cy.get("div.columns.text-left")
    }
    getTypeSection()
    {
        return cy.get('[ng-model="sectionFilterText"]')
    }
    getselectSection()
    {
        return cy.get('[ng-click="selectSection(section)"]')
    }
    getCalender()
    {
        return cy.get(".fa-calendar")
    }
    getCancelPublish()
    {
        return cy.get('[ng-click="negativeResponse()"]')
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
}
export default Mocktest;