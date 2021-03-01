/// <reference types="Cypress" />

import Activity from "../../support/pageObjects/Activity";
const ActivityPage = new Activity();

const cred = require("../../fixtures/Credentials.json");
const activityData = require("../../fixtures/Activity.json");

describe("Create Activity", function () {
  it("Signin", () => {
    cy.Signin(cred.TeacherUserName, cred.TeacherPassword);
  });
  it("Create Activity", function () {
    cy.Curriculum();
    ActivityPage.getCreateActivity().click({ force: true });
    ActivityPage.getName().type(activityData.name);
    ActivityPage.getClass().contains(activityData.Class);
    ActivityPage.getSubject().contains(activityData.Subject);
    ActivityPage.getChapter().contains(activityData.Chapter);
    cy.wait(2000);
    ActivityPage.getSubjectTopics()
      .contains(activityData.Topic)
      .click({ force: true });
    ActivityPage.getSubjectTopics()
      .contains(activityData.SubTopic)
      .click({ force: true });
    ActivityPage.getDescription().type(activityData.Description);
    ActivityPage.getCreateActivtyPush().click({ force: true });
    ActivityPage.getCheckbox().check().should("be.checked");
    //cy.get('[ng-click="cancelPush()"]').click()
    ActivityPage.getStartCalender().click();
    ActivityPage.getActiveDate(activityData.pushDate1).click();
    ActivityPage.getCalenderHour(activityData.pushHour1).click();
    ActivityPage.getCalenderMinute(activityData.pushMin1).click();
    ActivityPage.getEndCalender().click();
    ActivityPage.getActiveDate(activityData.pushDate2).click();
    ActivityPage.getCalenderHour(activityData.pushHour2).click();
    ActivityPage.getCalenderMinute(activityData.pushMin2).click();
    ActivityPage.getCancel().click();
  });
  it("View Activity", function () {
    ActivityPage.getViewActivity().click({ force: true });
    ActivityPage.getClass().contains(activityData.Class);
    ActivityPage.getSubject().contains(activityData.Subject);
    ActivityPage.getChapter().contains(activityData.Chapter);
    ActivityPage.getSelectDate().contains(activityData.CreatedDate);
    ActivityPage.getCalender1().click();
    ActivityPage.getDate().contains(activityData.Date1).click();
    ActivityPage.getCalender2().click();
    ActivityPage.getDate().contains(activityData.Date2).click();
    ActivityPage.getPushedButton().click();
    ActivityPage.getActivityPushedTable().each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes("Activity Test")) {
        $e1.click();
      }
    });
    ActivityPage.getBack().click();
  });
  it("Log out", () => {
    cy.Logout();
  });
});
