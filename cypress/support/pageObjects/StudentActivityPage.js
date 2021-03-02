class StudentActivityPage {
  getSubjectButton(Subject) {
    if (Subject == "Physics") return cy.get(".subject-button.Physics");
    else if (Subject == "Chemistry") return cy.get(".subject-button.Chemistry");
    else if (Subject == "Mathematics")
      return cy.get(".subject-button.Mathematics");
    else if (Subject == "Biology") return cy.get(".subject-button.Biology");
  }
  getChapterColumn() {
    return cy.get(".columns.chapters-column");
  }
  getChapter(chap) {
    return cy.contains(chap);
  }
  getNoActivityMsg() {
    cy.contains("No Activities");
  }
  getChapterWithActs() {
    return cy.get(".assignment-chapter-count.pending").last().parent();
  }
  getPendingIcon() {
    return cy.get(
      '[ng-show="selectedChapter.pendingAssignments && selectedChapter.pendingAssignments.length > 0"] > .resource-row-icon > .assignment-chapter-count > i'
    );
  }
  getCompletedIcon() {
    return cy.get(
      '[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > .resource-row-icon > .assignment-chapter-count > i'
    );
  }
  getPendingGrid() {
    return cy
      .get(
        '[ng-show="selectedChapter.pendingAssignments && selectedChapter.pendingAssignments.length > 0"] > .assignment-grid >'
      )
      .first();
  }
  getCompletedGrid() {
    return cy
      .get(
        '[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > .assignment-grid >'
      )
      .first();
  }
  getActiveActivityHeading() {
    return cy.get(
      ".half-activity-view-area > .row.activity-title-header > span.ng-binding"
    );
  }
  getResources() {
    return cy.get(".select-resource-list-item.clickable");
  }
  getCloseResouce() {
    return cy.get('[ng-click="closeModal()"]');
  }
  getSubmit() {
    return cy.get('[ng-click="onSubmit()"]');
  }
  getActivities() {
    return cy.get(
      '[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > ul'
    );
  }
}
export default StudentActivityPage;
