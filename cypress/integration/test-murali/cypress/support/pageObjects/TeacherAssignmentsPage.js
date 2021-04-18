class TeacherAssignmentPage {
  getSubject() {
    return cy.get(".subject-button");
  }
  getAssignment() {
    return cy.get('div>ul>li[item-disabled="false"]');
  }
  getTeacherAttachment() {
    return cy.get('[heading="Teacher Attachments"] > a.ng-binding');
  }
  viewTeacherAttachment() {
    return cy.get(".ng-scope > :nth-child(2) > .fa");
  }
  getTextBox() {
    return cy.get("[role=textbox]");
  }
  getSubmit() {
    return cy.get(".viewer-button-wrapper");
  }
  getAssignmentName() {
    return cy.get("#txtAssignmentName");
  }
  getClass() {
    return cy.get("#selclass");
  }
  getSubjectName() {
    return cy.get("#selSubject");
  }
  getChapter() {
    return cy.get("#Select1");
  }
  getTopic() {
    return cy.get(":nth-child(2) > .nice-select");
  }
  getSubTopic() {
    return cy.get(".edex-page-content > :nth-child(2) > :nth-child(4)");
  }
  setMarks() {
    return cy.get(".end > .form-control");
  }
  getDescription() {
    return cy.get(".cke_wysiwyg_div");
  }
  getSpecialInstructions() {
    return cy.get(".m-0r");
  }
  getPrint() {
    return cy.get('a[ng-click="onPrint()"]');
  }
  getCreateandPush() {
    return cy.get("#aCreateAndPush");
  }
  getPush() {
    return cy.get('[ng-click="submitPush()"]');
  }
  getCheckbox() {
    return cy.get('[type="checkbox"]');
  }
  getStartCalender() {
    return cy.get(".fa-calendar").eq(0);
  }
  getEndCalender() {
    return cy.get(".fa-calendar").eq(1);
  }
  getActiveDate(date) {
    return cy
      .get("td.day:not(.disabled):not(.future):not(.past)")
      .contains(String(date));
  }
  getCalenderHour(data) {
    return cy.get(".hour:not(disabled)").contains(String(data));
  }
  getCalenderMinute(data) {
    return cy.get(".minute:not(disabled)").contains(String(data));
  }
  /*getCalenderHour1() {
    return cy.get(".hour:nth-child(22)");
  }
  getCalenderMinute1() {
    return cy.get(".minute:nth-child(10)");
  }*/
  getCancel() {
    return cy.get('[ng-click="cancelPush()"]');
  }
}
export default TeacherAssignmentPage;
