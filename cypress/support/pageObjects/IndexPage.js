class IndexPage{
  getAssessment(){
    return cy.get('span.icon-assessment')
  }
  getAssignment(){
    return cy.get("span.icon-assignment");
  }
  getCurriculum(){
    return cy.get('span.icon-curriculum')
  }
  getDropdownAssignment(){
    return cy.get('[data-dropdown="dropdownAssignment"]');
  }
  getCreateAssignment(){
    return cy.get('[ui-sref="assignmentCreate"]');
  }
}
export default IndexPage;
