/*
Author : Rajasekhar, Harsha
Working
Attachment fails
*/
import AssignmentPage from "../support/pageObjects/AssignmentsPage";
import IndexPage from "../support/pageObjects/IndexPage";
//import Signin from "../../support/pageObjects/Signin";

const CREDENTIALS = require("../fixtures/Credentials.json");
const ASSIGNMENT_DATA = require("../fixtures/Assignment-Data.json");
const index = new IndexPage();
const assignment = new AssignmentPage();

describe("Student Assignment", () => {
  it("Signin", function () {
    cy.Signin(CREDENTIALS.student.Username, CREDENTIALS.student.Password);
  });
  it("Assignment", function () {

    index.getAssignment().click();
    // cy.get('.subjects-list-wrapper>ul>li>div').each(function($el){
    //     var name  = $el.text()
    //     if(name === this.data.name){
    //         $el.find('.subject-button').click()
    //     }
    // })

    assignment.getSubject().contains(ASSIGNMENT_DATA.Subject).click();
    assignment.getAssignment().last().click({force:true});
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
    /*const special = "Erudex.jpg";
    cy.fixture(special).then((fileContent) => {
      cy.get(".text-left > .button").attachFile({
        fileContent,
        fileName: "Erudex.jpg",
        mimeType: "image/jpg",
      });
    });*/
    assignment.getSubmit().contains("Submit").last().click();
    cy.get(".button").contains("Yes").should("be.visible").click();
  });
  it("Logout", () => {
    cy.Logout();
  });
});
