class StudentMockTest {
    getTests(){
        return cy.get("span.icon-competitive"); 
    }
    getExamCurriculum(curr){
        return cy.get('.row.curriculum-wrapper  ul').contains(curr);
    }
    getTestType(type){
        return cy.get('ul.exam-type-list').contains(type);
    }
    getTestAvailabilityRadio(type){
        return cy.get('ul.toggle-radio-switch-wrapper').contains(type);
    }
    getExamSyllabus(examTitle){
        return cy.contains(examTitle).parent().children(".exam-chapters");
    }
    getModalOk(){
        return cy.get("div.button");
    }
    TakeTest(examTitle){
        return cy.contains(examTitle)
                 .parentsUntil("mCSB_4_container")
                 .children('.exam-data')
                 .children('.exam-status[item-disabled="false"]');
    }
    getSaveNext() {
        return cy.get(
          "[ng-click=\"(timer.value > 0) && saveQuestion(currentPage, currentQuestion, 'answered')\"]"
        );
      }
      getSubmit() {
        return cy.get('[ng-click="finishAssessment()"]');
      }

}export default StudentMockTest;
  