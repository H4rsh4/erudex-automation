class GradingPage {
  showPushedAssignment() {
    return cy.get('[ng-click="showPushedAssignments()"]');
  }
  getAction() {
    return cy.get("table.f-table>tbody>tr:nth-child(1)>td:nth-child(8)");
  }
  getStatus() {
    return cy.get("table.f-table>thead");
  }
  getViewAssignment() {
    return cy.get("table.f-table>tbody>tr>td:nth-child(6)");
  }
  getComment() {
    return cy.get("textarea#txtComment");
  }
  getFeedBack() {
    return cy.get("textarea#txtFeedback");
  }
  getMarks() {
    return cy.get('[type = "number"]');
  }
  getGradeButton() {
    return cy.get("a#btnGrade");
  }
  getUpdateGrade() {
    return cy.get('[ng-show="isUpdatingGrade"]');
  }
  getYes() {
    return cy.get("a.e-button.radius");
  }
  getUpdatedtext() {
    return cy.get("#popupGradeComment");
  }
  getSave() {
    return cy.get('[ng-click="saveComment(gradeComment)"]');
  }
  getFeedBackbutton() {
    return cy.get("a#btnFeedback");
  }
}
export default GradingPage;
