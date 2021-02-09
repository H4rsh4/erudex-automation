/*
Author : Rajasekhar, Harsha
*/
import AssignmentPage from "../../support/pageObjects/AssignmentsPage";
import IndexPage from "../../support/pageObjects/IndexPage";
import Signin from "../../support/pageObjects/Signin";

describe("testing", () => {
  beforeEach(function () {
    cy.fixture("StudentDataAssignment").then(function (data) {
      this.data = data;
    });
  });
  it("signin", function () {
    const signin = new Signin();
    cy.visit(Cypress.env("url"));
    signin.getUsername().first().should("be.visible").type(this.data.username);
    signin.getPassword().first().type(this.data.password);
    signin.getSubmit().first().click();
    signin.getPopup().contains("Yes").should("be.visible").click();
  });
  it("Assignment", function () {
    const index = new IndexPage();
    index.getAssignment().click();
    // cy.get('.subjects-list-wrapper>ul>li>div').each(function($el){
    //     var name  = $el.text()
    //     if(name === this.data.name){
    //         $el.find('.subject-button').click()
    //     }
    // })
    const assignment = new AssignmentPage();
    assignment.getSubject().contains(this.data.subject).click();
    assignment.getAssignment().last().click();
    // if (assignment.getTeacherAttachment()) {
    //   assignment.getTeacherAttachment().click();
    //   assignment
    //     .viewTeacherAttachment()
    //     .click()
    //     .then(() => {
    //       cy.wait(4000);
    //       cy.get('[ng-click="closeModal()"]').click();
    //     });
    // }
    assignment.getTextBox().type("This is the test demo");
    const special = "Erudex.png";
    cy.fixture(special).then((fileContent) => {
      cy.get(".text-left > .button").attachFile({
        fileContent,
        fileName: "Erudex.png",
        mimeType: "image/png",
      });
    });
    assignment.getSubmit().contains("Submit").last().click();
    cy.get(".button").contains("Yes").should("be.visible").click();
  });
});
