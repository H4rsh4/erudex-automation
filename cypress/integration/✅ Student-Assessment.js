/*
Authors: Harsha
Up to Date;
*/
import IndexPage from "../support/pageObjects/IndexPage";
import StudentAssessmentPage from "../support/pageObjects/StudentAssessmentPage.js";

const CREDENTIALS = require("../fixtures/Credentials.json");
const assessmentData = require("../fixtures/Assessment-Data.json");

const IP = new IndexPage();
const AssessmentPage = new StudentAssessmentPage();

describe("Create and Push Activity", () => {
  it("Signin", () => {
    cy.Signin(CREDENTIALS.student.Username, CREDENTIALS.student.Password);
  });
  it("Begin Assessment", () => {
    IP.getAssessment().trigger("click");
    AssessmentPage.getSubject(assessmentData.subject).click()
    AssessmentPage.getAssessment(assessmentData.name).click();
    AssessmentPage.startAssessment().click();
  });
  it("Take Assessment", () => {
    //Get the Answers
    const answers = assessmentData.student.qid;
    //and initialize an Array for looping
    let assessmentLength = Object.keys(answers).length;
    const TestLoop = Array.from({ length: assessmentLength });

    cy.wrap(TestLoop).each((el, idx, li) => {
      //Get the Question ID object to extract qid
      cy.contains("QID").then(($qid) => {
        //Process the String for qid
        let questiontxt = $qid.text();
        let pos = questiontxt.indexOf("QID:");
        let qid = questiontxt.slice(pos + 5, -1);
        //select the appropriate option
        cy.get(`[for="${answers[String(qid)]}"]`).click();
      });
      //Press Save and Next
      AssessmentPage.getSaveNext().click();
      cy.wait(1000);
    });
    //Submit
    //cy.get(".pull-right").click();
    //cy.get(".success").click();
    //cy.get(".ng-binding > .button").click();
    AssessmentPage.getSubmit().click();
  });
  it("Log Out", () => {
    cy.Logout();
  });
});
