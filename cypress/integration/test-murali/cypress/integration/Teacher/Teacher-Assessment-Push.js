/*
Author: Harsha
Working, change dates accordingly
*/

/// <reference types="cypress" />

import IndexPage from "../support/pageObjects/IndexPage.js";
import TeacherAssessmentPage from "../support/pageObjects/TeacherAssessmentPage.js";

//fixture data
const cred = require("../fixtures/Credentials.json");
const assessmentData = require("../fixtures/Assessment-data.json");

const IP = new IndexPage();
const AssessmentPage = new TeacherAssessmentPage();

describe("Teacher-Student Assessment Pipeline", () => {
  it("Signin", () => {
    cy.Signin(cred.teacher.Username, cred.teacher.Password);
  });
  it("Reach Create Assessment Page", () => {
    IP.getAssessment().trigger("click");
    //reach add Assignment Page
    IP.getCreateAssessment().click({ force: true });
  });
  it("Assessment Setup", () => {
    AssessmentPage.getAssessmentName().type(assessmentData.name);
    AssessmentPage.getClass(assessmentData.class);
    cy.wait(2000);
    AssessmentPage.getSubject(assessmentData.subject);
    AssessmentPage.getDifficulty(assessmentData.difficulty);
  });
  it("Select Number of Questions and Press OK", () => {
    AssessmentPage.getManualSelection().click();
    //Question Table
    //extra wait time as the table can take a while to load
    cy.wait(5000);
    AssessmentPage.getQuestionsTable().each(($el, index, $list) => {
      if (index > assessmentData.numberOfQuestions) return;
      else $el.trigger("click");
    });
    AssessmentPage.getOkay().scrollIntoView().click({ force: true });
  });
  it("Push Assessment", () => {
    AssessmentPage.getOkay().click({ force: true });
    AssessmentPage.getCreateandPush().click({ force: true });
    AssessmentPage.getCheckbox().check().should("be.checked");
    AssessmentPage.getStartCalender().click();
    AssessmentPage.getActiveDate(assessmentData.pushDate1).click();
    AssessmentPage.getCalenderHour(assessmentData.pushHour1).click();
    AssessmentPage.getCalenderMinute(assessmentData.pushMin1).click();
    AssessmentPage.getEndCalender().click();
    AssessmentPage.getActiveDate(assessmentData.pushDate2).click();
    AssessmentPage.getCalenderHour(assessmentData.pushHour2).click();
    AssessmentPage.getCalenderMinute(assessmentData.pushMin2).click();
    //AssessmentPage.getCancel().click()
    AssessmentPage.getPush().click();
  });
  it("Check Pushed Assessment", () => {
    //Wait for the assignment to be pushed
    cy.wait(4000);
    AssessmentPage.getAssessmentList().click({ force: true });
    AssessmentPage.getPushedAssessments().click();
    cy.wait(2000);
    AssessmentPage.getFirstAssignment().then(($obj) => {
      AssessmentPage.assertName($obj, assessmentData.name);
    });
  });
  it("Log Out", () => {
    cy.Logout();
  });
});
