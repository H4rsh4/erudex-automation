/// <reference types="Cypress" />
import TeacherAssessmentPage from "../../support/pageObjects/TeacherAssessmentPage";
import DataEntry from "../../support/pageObjects/DataEntry.js";
//fixture data
const assessmentData = require("../../fixtures/Assessment-data.json");
const AssessmentPage = new TeacherAssessmentPage();
const de = new DataEntry();
// const DEntry = new DataEntry();
const Dataentry = require("../../fixtures/DatEntry.json");

// Variables
const institute = "Erudex QA Test  2 (ER-SCH0062)";
const teachername = "eru.teacher2";
const teacherpassword = "eru.teacher2";
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
    cy.get("#dropdownCompAssessment")
      .find('[ui-sref="compAssessment.create"]')
      .contains("Create Mock")
      .click({ force: true });
    cy.get('[ng-model="assessment.name"]').first().type(testname);
    cy.get("select.form-control").eq(0).select(testtype);
    cy.get('[ng-model="assessment.curriculum"]').select(curriculum);
    cy.get('[ng-model="assessment.grade"]').select(grade);
    cy.get('[ng-model="assessment.subject"]').select(subject);
    cy.get('[ng-model="assessment.difficultyLevel"]').select(difficulty);
    cy.get('[ng-model="assessment.duration"]').clear().type(duration);
    cy.get('[ng-model="assessment.totalScore"]').clear().type(score);
    cy.get('[ng-model="assessment.negativeMarkingValue"]')
      .first()
      .select(negativeval);
  });
  // it("Adding a new Question", () => {
  //   cy.get('[ng-click="addNewQuestion()"]').click();
  //   cy.Adding_a_new_Question();
  //   // Testing all the buttons avilable
  //   //Clear Button
  //   cy.get('[ng-click="clearAllInput()"]').click();
  //   cy.Adding_a_new_Question();
  //   //Preview Button
  //   cy.get('[ng-click="previewQuestion()"]').click();
  //   cy.get('[ng-click="closeThisDialog()"]').click();
  //   // Close Button
  //   cy.get('[ng-click="close()"]').click();
  //   // previewSaveQuestion
  //   cy.get('[ng-click="addNewQuestion()"]').click();
  //   cy.Adding_a_new_Question();
  //   cy.get('[ng-click="previewSaveQuestion()"]').click();
  //   cy.get('[ng-click="closeThisDialog()"]').click();
  //   // Save Button
  //   cy.get('[ng-click="saveQuestion()"]').click();
  //   cy.get('[ng-click="close()"]').click();
  // });
  it("Select Number of Questions and Press OK", () => {
    cy.get('[ng-click="addQuestions()"]').click();
    // AssessmentPage.getManualSelection().click();
    cy.wait(5000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get('[ng-model="subject"]').select("0");
    cy.get('[ng-click="applyFilter()"]').click();
    cy.get('[ng-click="clearFilter()"]').click();

    AssessmentPage.getQuestionsTable().each(($el, index, $list) => {
      cy.log(index);
      if (index >= assessmentData.numberOfQuestions) return;
      else $el.trigger("click");
      cy.wait(2000);
    });
    AssessmentPage.getOkay().scrollIntoView().click({ force: true });
    cy.get('[ng-click="saveAssessment()"]').click();
  });
  it("Viewing the Mocktest", () => {
    cy.get("#dropdownCompAssessment")
      .find('[ui-sref="compAssessment.list"]')
      .contains("View Mock")
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
    cy.get('[for="include_erudex"]').click();
    cy.get('[ng-click="clearFilter()"]').click();
    cy.get('[for="include_erudex"]').click();
    cy.viewing_the_test(
      testname,
      testtype,
      status,
      curriculum,
      grade,
      subject,
      difficulty
    );
    cy.get('[ng-click="applyFilter()"]').click();
  });
  it("Assign", () => {
    cy.get('[ng-click="teacherAssign(rec, filter)"]')
      .contains("Assign")
      .first()
      .click();
    cy.get('[ng-model="selectedInstitution"]').select(institute);
    cy.get('[ng-model="selectedTeacher"]').select(teachername);
    cy.get('[ng-click="positiveResponse()"]').click();
    // Logout from Data Entry
    cy.Logout();
  });
  it("Teacher Approving the Test", () => {
    cy.Signin(teachername, teacherpassword);
    cy.get(".competitive-btn").contains(curriculumbtn).click();
    cy.get("#mCSB_8_container > .ac-dash-list-item").contains(testname).click();
    cy.get('[ng-click="negativeResponse()"]').click();
    cy.get("#mCSB_8_container > .ac-dash-list-item").contains(testname).click();
    cy.get('[ng-click="positiveResponse()"]').click();
    // Logout from Teacher
    cy.Logout();
  });
  it("Viewing the Mocktest", () => {
    cy.Signin(Dataentry.Username, Dataentry.Password);

    cy.get("#dropdownCompAssessment")
      .find('[ui-sref="compAssessment.list"]')
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
    cy.get('[ng-click="applyFilter()"]').click();
    cy.get('[ng-click="publishAssessment(rec, filter)"]').click();
    //Date

    //Institution
    cy.get("div.columns.text-left")
      .contains("Erudex QA Test 2")
      .click({ force: true });
    //Section
    cy.get('[ng-model="sectionFilterText"]').type("A");
    cy.get('[ng-click="selectSection(section)"]').first().click();
    cy.get(".fa-calendar").last().click();
    de.getActiveDate(date).click();
    de.getCalenderHour(hour).click();
    de.getCalenderMinute(minute).click();
    // cy.get('[ng-click="negativeResponse()"]').click();
    // //Institution
    // cy.get("div.columns.text-left")
    //   .contains("Erudex QA Test 2")
    //   .click({ force: true });
    // //Section
    // cy.get('[ng-model="sectionFilterText"]').clear().type("A");
    // cy.get('[ng-click="selectSection(section)"]').first().click();
    // cy.get(".fa-calendar").last().click();
    // de.getActiveDate(date).click();
    // de.getCalenderHour(hour).click();
    // de.getCalenderMinute(minute).click();
    cy.get('[ng-click="positiveResponse()"]').last().click({ force: true });
  });
});
