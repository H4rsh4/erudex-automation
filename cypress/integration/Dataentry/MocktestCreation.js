/// <reference types="Cypress" />
import TeacherAssessmentPage from "../../support/pageObjects/TeacherAssessmentPage";
import Mocktest from "../../support/pageObjects/MockTest"
// import DataEntry from "../../support/pageObjects/DataEntry.js";
//fixture data
const assessmentData = require("../../fixtures/Assessment-data.json");
const AssessmentPage = new TeacherAssessmentPage();
// const de = new DataEntry();
const mktest = new Mocktest();
// const DEntry = new DataEntry();
const Dataentry = require("../../fixtures/DatEntry.json");

// Variables
const institute = "Erudex QA Test  2 (ER-SCH0062)";
const teachername = "eru.teacher1";
const teacherpassword = "eru.teacher1";
const testname = "Mocktest using Cypress";
const testtype = "Part Test";
const grade = "Class 12";
const subject = "Physics";
const difficulty = "Easy";
const duration = "10";
const score = "10";
const numberofquestions = "5";
const status = "Pending"; // fixed
const curriculum = "IIT - JEE Mains-English";
const curriculumbtn = "IIT - JEE MAINS"; //
const negativeval = "1"; // insert 0 or 1

// Publishing the mock test timings
const date = "18";
const hour = "3:00 PM";
const minute = "3:40 PM";
// Code
describe("My First Test Suite", function () {
  it("Signin", () => {
    cy.Signin(Dataentry.Username, Dataentry.Password);
  });
  it("Create Mock test", () => {
    mktest.getCreateMock()
      .contains("Create Mock")
      .click({ force: true });
    mktest.getAssessmentName().type(testname);
    mktest.gettestType().select(testtype);
    mktest.getCurriculum().select(curriculum);
    mktest.getGrade().select(grade);
    mktest.getSubject().select(subject);
    mktest.getDifficulty().select(difficulty);
    mktest.getDuration().type(duration);
    mktest.getScore().type(score);
    mktest.getNegativeVal().select(negativeval);
  });
  // it("Adding a new Question", () => {
  //   mktest.getAddNewquestion().click();
  //   cy.Adding_a_new_Question();
  //   // Testing all the buttons avilable
  //   //Clear Button
  //   mktest.getClear().click();
  //   cy.Adding_a_new_Question();
  //   //Preview Button
  //   mktest.getPreview().click();
  //   mktest.getPreviewClose().click();
  //   // Close Button
  //   mktest.getClose().click();
  //   // previewSaveQuestion
  //   mktest.getAddNewquestion().click();
  //   cy.Adding_a_new_Question();
  //   mktest.getPreviewSave().click();
  //   mktest.getPreviewClose().click();
  //   // Save Button
  //   mktest.getSaveQuestion().click();
  //   mktest.getClose().click();
  // });
  it("Select Number of Questions and Press OK", () => {
    mktest.getSelectQuestion().click();
    // AssessmentPage.getManualSelection().click();
    cy.wait(5000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    mktest.getallsubject().select("0");
    mktest.getApplyFilter().click();
    mktest.getClearFilter().click();

    mktest.getQuestionsTable().each(($el, index, $list) => {
      cy.log(index);
      if (index >= assessmentData.numberOfQuestions) return;
      else $el.trigger("click");
      cy.wait(2000);
    });
    mktest.getOkay().scrollIntoView().click({ force: true });
    mktest.getSaveAssessment().click();
  });
  it("Viewing the Mocktest", () => {
    mktest.getViewMock().contains("View Mock")
      .click({ force: true });
    cy.viewing_the_test(
      testname,
      testtype,
      status,
      curriculum,
      grade,
      subject,
      difficulty
    );
    mktest.getIncludeErudex().click();
    mktest.getClearFilter().click();
    mktest.getIncludeErudex().click();
    cy.viewing_the_test(
      testname,
      testtype,
      status,
      curriculum,
      grade,
      subject,
      difficulty
    );
    mktest.getApplyFilter().click();
  });
  it("Assign", () => {
    mktest.getTeacherAssign().contains("Assign")
      .first()
      .click();
    mktest.getInsitution().select(institute);
    mktest.getTeacher().select(teachername);
    mktest.getAssign().click();
    // Logout from Data Entry
    cy.Logout();
  });
  it("Teacher Approving the Test", () => {
    cy.Signin(teachername, teacherpassword);
    cy.get(".competitive-btn").contains(curriculumbtn).click();
    cy.get("#mCSB_8_container > .ac-dash-list-item").contains(testname).click();
    mktest.getCancelPublish().click();
    cy.get("#mCSB_8_container > .ac-dash-list-item").contains(testname).click();
    mktest.getAssign().click();
    // Logout from Teacher
    cy.Logout();
  });
  it("Viewing the Mocktest", () => {
    cy.Signin(Dataentry.Username, Dataentry.Password);

    mktest.getViewMock()
      .contains("View Mock")
      .click({ force: true });
    cy.viewing_the_test(
      testname,
      testtype,
      "All",
      curriculum,
      grade,
      subject,
      difficulty
    );
    mktest.getApplyFilter().click();
    mktest.getManagePublish().click();
    //Date

    //Institution
    mktest.getSelectInstitute()
      .contains("Erudex QA Test 2")
      .click({ force: true });
    //Section
    mktest.getTypeSection().type("A");
    mktest.getselectSection().first().click();
    mktest.getCalender().last().click();
    mktest.getActiveDate(date).click();
    mktest.getCalenderHour(hour).click();
    mktest.getCalenderMinute(minute).click();
    // mktest.getCancelPublish().click();
    // //Institution
    // mktest.getSelectInstitute()
    //   .contains("Erudex QA Test 2")
    //   .click({ force: true });
    // //Section
    // mktest.getTypeSection().clear().type("A");
    // mktest.getselectSection().first().click();
    // mktest.getCalender().last().click();
    // mktest.getActiveDate(date).click();
    // mktest.getCalenderHour(hour).click();
    // mktest.getCalenderMinute(minute).click();
    mktest.getAssign().last().click({ force: true });
  });
});
