/*
Author : Rajasekhar, Harsha
Unfinished
*/
import AssignmentPage from "../../support/pageObjects/AssignmentsPage";
import IndexPage from "../../support/pageObjects/IndexPage";
import Signin from "../../support/pageObjects/Signin";

const CREDENTIALS = require("../fixtures/Credentials.json");
const ASSIGNMENT_DATA = require("../fixtures/Assignment-Data.json");
const IndexPage = new IndexPage();
const AssignmentPage = new AssignmentPage();

describe("Student Assignment", () => {
  it("Signin", function () {
    cy.Signin(CREDENTIALS.Username, CREDENTIALS.Password);
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
    assignment.getSubject().contains(ASSIGNMENT_DATA.subject).click();
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
  it("Logout", () => {
    cy.Logout();
  });
});
