/// <reference types="Cypress" />

import TeacherAssess from "../../support/pageObjects/TeacherAssess";
const AssessmentPage = new TeacherAssess();

const cred = require("../../fixtures/Credentials.json");
const assessmentData = require("../../fixtures/Assessment.json");
describe("Teacher Assessment", function () {
  it("Signin", () => {
    cy.Signin(cred.TeacherUserName, cred.TeacherPassword);
  });
  it("Create Assessment Use Pre-Mode", function () {
    cy.intercept({
        pathname: "/user/getUserCurriculum"
    }).as('Curr-Data')
    cy.intercept({
        pathname: "/ErudexWebService/rest/assessment/search"
    }).as('search')
    cy.Curriculum();
    AssessmentPage.getCreateAssessment().click({ force: true });
    AssessmentPage.getAssessmentName().type(assessmentData.name);
    AssessmentPage.getLanguage().contains(assessmentData.Language);
    AssessmentPage.getClass().contains(assessmentData.Class);
    cy.wait('@Curr-Data')
    AssessmentPage.getSubject().contains(assessmentData.Subject);
    cy.wait(1000);
    AssessmentPage.getLevelDifficulty().contains(assessmentData.Difficulty);
    cy.wait(1000);
    AssessmentPage.getDuration().contains(assessmentData.Duration);
    AssessmentPage.getMarks().contains(assessmentData.Marks);
    cy.contains(assessmentData.usepremode).click();
    cy.wait('@search')
    AssessmentPage.getName().type(assessmentData.name);
    AssessmentPage.getLevel().contains(assessmentData.Level);
    AssessmentPage.getOwner().contains(assessmentData.Owner);
    AssessmentPage.getAssessDate().contains("Created Date");
    AssessmentPage.getCalender1().click();
    AssessmentPage.getDate().contains("15").click();
    AssessmentPage.getCalender2().click();
    AssessmentPage.getDate().contains("15").click();
    AssessmentPage.getSelectButton().click({ force: true });
    // cy.wait('@search')
  });
  it("Create Assessment Select Questions", function () {
    cy.intercept({
      pathname: "/ErudexWebService/rest/assessment/search"
    }).as('search')
    cy.intercept({
      pathname: "/ErudexWebService/rest/question/getMcqHistory"
    }).as('viewQstn')
    cy.intercept({
      pathname: "/ErudexWebService/rest/assessment/saveTeacherAssessment"
    }).as('TeacherAssessment')
    AssessmentPage.getSelectQstns().click();
    cy.wait('@search')
    AssessmentPage.getChapter().contains(assessmentData.chaptr1);
    // cy.wait('@search')
    AssessmentPage.getTopic().contains(assessmentData.topic);
    // cy.wait('@search')
    AssessmentPage.getDifficulty().contains(assessmentData.difficulty);
    AssessmentPage.getquestiontype().contains(assessmentData.typeqstn);
    // AssessmentPage.getSkillType().contains(assessmentData.Skill);
    AssessmentPage.getPastExam().contains(assessmentData.exam);
    AssessmentPage.getExamYear().contains(assessmentData.year);
    // AssessmentPage.getquestiontype().contains(assessmentData.typeqstn);
    AssessmentPage.getDescription().type(assessmentData.Description);
    AssessmentPage.getConcepttype().type(assessmentData.concept);
    AssessmentPage.getAddquestion().click({ force: true });
    AssessmentPage.getviewqustn().click({ force: true });
    cy.wait('@viewQstn')
    AssessmentPage.getcloseDialog().click();
    AssessmentPage.getAddquestion2().click({ force: true });
    AssessmentPage.getAddquestion3().click({ force: true });
    AssessmentPage.getOkay().click();
    AssessmentPage.getCreateandPush().click();
    cy.wait('@TeacherAssessment')
    AssessmentPage.getCheckbox().check().should("be.checked");
    AssessmentPage.getStartCalender().click();
    AssessmentPage.getActiveDate(assessmentData.pushDate1).click();
    AssessmentPage.getCalenderHour(assessmentData.pushHour1).click();
    AssessmentPage.getCalenderMinute(assessmentData.pushMin1).click();
    AssessmentPage.getEndCalender().click();
    AssessmentPage.getActiveDate(assessmentData.pushDate2).click();
    AssessmentPage.getCalenderHour(assessmentData.pushHour2).click();
    AssessmentPage.getCalenderMinute(assessmentData.pushMin2).click();
    AssessmentPage.getCancel().click();
  });
  it("Create Assessment Auto Select Questions", function () {
    cy.intercept({
      pathname: "/ErudexWebService/rest/assessment/autoGenerateQuestions"
    }).as('autoGenerate')
    cy.intercept({
      pathname: "/ErudexWebService/rest/assessment/saveTeacherAssessment"
    }).as('TeacherAssessment')
    AssessmentPage.getAssessmentName().type(assessmentData.name);
    AssessmentPage.getLanguage().contains(assessmentData.Language);
    AssessmentPage.getClass().contains(assessmentData.Class);
    AssessmentPage.getSubject().contains(assessmentData.Subject);
    AssessmentPage.getLevelDifficulty().contains(assessmentData.Difficulty);
    AssessmentPage.getDuration().contains(assessmentData.Duration);
    AssessmentPage.getMarks().contains(assessmentData.Marks);
    cy.contains(assessmentData.AutoSelectquestions).click();
    AssessmentPage.getquestions().contains(assessmentData.questions);
    AssessmentPage.getAutoselectChapter1()
      .contains(assessmentData.selectChpter)
      .click();
    AssessmentPage.getAutoselectChapter2()
      .contains(assessmentData.selectChpter1)
      .click();
    AssessmentPage.getAutoquestions().click();
    cy.wait('@autoGenerate')
    AssessmentPage.getCreateNdPush().click();
    cy.wait('@TeacherAssessment')
    AssessmentPage.getCheckbox().check().should("be.checked");
    AssessmentPage.getStartCalender().click();
    AssessmentPage.getActiveDate(assessmentData.pushDate1).click();
    AssessmentPage.getCalenderHour(assessmentData.pushHour1).click();
    AssessmentPage.getCalenderMinute(assessmentData.pushMin1).click();
    AssessmentPage.getEndCalender().click();
    AssessmentPage.getActiveDate(assessmentData.pushDate2).click();
    AssessmentPage.getCalenderHour(assessmentData.pushHour2).click();
    AssessmentPage.getCalenderMinute(assessmentData.pushMin2).click();
    AssessmentPage.getCancel().click();
  });
  it("View Assessments", function () {
    cy.intercept({
      pathname: "/ErudexWebService/rest/assessment/getUserAssessmentsByCriteria"
    }).as('AssessmentsByCriteria')
    cy.intercept({
      pathname: "/userActivity/addPageActivity"
    }).as('PageActivityData')
    AssessmentPage.getViewAssessment().click({ force: true });
    AssessmentPage.getViewClass().contains(assessmentData.Class);
    AssessmentPage.getViewSubject().contains(assessmentData.Subject);
    AssessmentPage.getViewChapter().contains(assessmentData.chapter);
    AssessmentPage.getViewDate().contains(assessmentData.CreatedDate);
    AssessmentPage.getCalender1().click();
    AssessmentPage.getDate().contains(assessmentData.Date1).click();
    AssessmentPage.getCalender2().click();
    AssessmentPage.getDate().contains(assessmentData.Date2).click();
    AssessmentPage.getPushedAssessment().click();
    cy.wait('@PageActivityData')
    AssessmentPage.getPushedContent().each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes("English")) {
        $e1.click();
      }
    });
    cy.wait('@PageActivityData')
    AssessmentPage.getBack().click();
  });
  it("Log out", () => {
    cy.Logout();
  });
});
