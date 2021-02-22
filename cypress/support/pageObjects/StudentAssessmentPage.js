class StudentAssessmentPage {
  getSubject(subject){
    return cy.get(`.subject-button.${subject}`)
  }
  getAssessment(Assignment_Name) {
    return cy.get(`[title="${Assignment_Name}"]`).parent().last();
  }
  startAssessment() {
    return cy.get('[ng-click="onStartAssessment()"]');
  }
  getSaveNext() {
    return cy.get(
      "[ng-click=\"(timer.value > 0) && saveQuestion(currentPage, currentQuestion, 'answered')\"]"
    );
  }
  getSubmit() {
    return cy.get('ng-click="finishAssessment()"');
  }
}
export default StudentAssessmentPage;
