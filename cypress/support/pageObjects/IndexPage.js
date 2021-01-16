class IndexPage {
  getAssignment() {
    return cy.get("span.icon-assignment");
  }
  getDropdownAssignment() {
    return cy.get('[data-dropdown="dropdownAssignment"]');
  }
  getCreateAssignment() {
    return cy.get('[ui-sref="assignmentCreate"]');
  }
}
export default IndexPage;
