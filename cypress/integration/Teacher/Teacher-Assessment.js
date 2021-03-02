/*
Author: Murali
*/
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
    cy.Curriculum();
    AssessmentPage.getCreateAssessment().click({ force: true });
    AssessmentPage.getAssessmentName().type(assessmentData.name);
    AssessmentPage.getLanguage().contains(assessmentData.Language);
    AssessmentPage.getClass().contains(assessmentData.Class);
    AssessmentPage.getSubject().contains(assessmentData.Subject);
    cy.wait(1000);
    AssessmentPage.getLevelDifficulty().contains(assessmentData.Difficulty);
    cy.wait(1000);
    AssessmentPage.getDuration().contains(assessmentData.Duration);
    AssessmentPage.getMarks().contains(assessmentData.Marks);
    cy.contains(assessmentData.usepremode).click();
    AssessmentPage.getName().type(assessmentData.name);
    AssessmentPage.getLevel().contains(assessmentData.Level);
    AssessmentPage.getOwner().contains(assessmentData.Owner);
    AssessmentPage.getAssessDate().contains("Created Date");
    AssessmentPage.getCalender1().click();
    AssessmentPage.getDate().contains("15").click();
    AssessmentPage.getCalender2().click();
    AssessmentPage.getDate().contains("15").click();
    AssessmentPage.getSelectButton().click({ force: true });
  });
  it("Create Assessment Select Questions", function () {
    AssessmentPage.getSelectQstns().click();
    AssessmentPage.getChapter().contains(assessmentData.chaptr1);
    AssessmentPage.getTopic().contains(assessmentData.topic);
    AssessmentPage.getDifficulty().contains(assessmentData.difficulty);
    AssessmentPage.getSkillType().contains(assessmentData.Skill);
    AssessmentPage.getPastExam().contains(assessmentData.exam);
    AssessmentPage.getExamYear().contains(assessmentData.year);
    AssessmentPage.getquestiontype().contains(assessmentData.typeqstn);
    AssessmentPage.getDescription().type(assessmentData.Description);
    AssessmentPage.getConcepttype().type(assessmentData.concept);
    AssessmentPage.getAddquestion().click({ force: true });
    AssessmentPage.getviewqustn().click({ force: true });
    AssessmentPage.getcloseDialog().click();
    AssessmentPage.getAddquestion2().click({ force: true });
    AssessmentPage.getAddquestion3().click({ force: true });
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
    AssessmentPage.getCancel().click();
  });
  it("Create Assessment Auto Select Questions", function () {
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
    cy.wait(3000);
    AssessmentPage.getCreateNdPush().click({ force: true });
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
    AssessmentPage.getPushedContent().each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes("English")) {
        $e1.click();
      }
    });
    AssessmentPage.getBack().click();
  });
  it("Log out", () => {
    cy.Logout();
  });
});
