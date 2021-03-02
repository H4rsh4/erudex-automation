class StudentAssignmentPage {
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
    return cy.get(".chapter-name");
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
  getCreatePushButton() {
    return cy.get("#aCreateAndPush");
  }
}
export default StudentAssignmentPage;
