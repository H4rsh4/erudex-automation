class AssigningPage {
  getSectionCheckBox() {
    return cy.get('[type="checkbox"]');
  }
  getSectionArrow() {
    return cy.get("div.share-open-group");
  }
  getCalendar() {
    return cy.get("i.fa.fa-calendar");
  }
  getDate() {
    return cy.get(".day");
  }
  getHour() {
    return cy.get(".hour");
  }
  getMinute() {
    return cy.get(".minute");
  }
  getSubmitPush() {
    return cy.get('[ng-click="submitPush()"]');
  }
}
export default AssigningPage;
