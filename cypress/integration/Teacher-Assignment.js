/*
Author: Harsha, Rajasekhar, Murali
Notes:
  Haven't Tested yet
  Change Push Date in the Fixture File when Testing
*/
import TeacherAssignmentPage from "../support/pageObjects/TeacherAssignmentsPage.js";
import IndexPage from "../support/pageObjects/IP.js";

const CREDS = require("../fixtures/credentials.json");
const assignmentData = require("../fixtures/Assignment-Data.json");

const IP = new IndexPage();
const AssignmentPage = new TeacherAssignmentPage();

describe("Create and Push Activity", () => {
  it("Signin", () => {
    cy.signIn(CREDS.teacher.Username, CREDS.teacher.Password);
  });
  it("Reach Create Assignment Page", () => {
    IP.getAssignment();
    IP.getCreateAssignment();
  });
  it("Create Assignment", () => {
    AssignmentPage.getAssignmentName().type(assignmentData.Name);
    AssignmentPage.getClass().select(assignmentData.Class);
    AssignmentPage.getSubjectName().select(assignmentData.Subject);
    AssignmentPage.getChapter().select(assignmentData.Chapter);
    AssignmentPage.getDescription().type(assignmentData.Desc);
    AssignmentPage.setMarks().select("0");
    AssignmentPage.getSpecialInstructions().type("Special Instruction Working");
    //Attaching Files isn't working
  });
  it("Push Assignment", () => {
    AssignmentPage.getCreatePushButton().click();
    AssignmentPage.getCheckbox().check().should("be.checked");
    AssignmentPage.getStartCalender().click();
    AssignmentPage.getActiveDate(assignmentData.pushDate).click();
    AssignmentPage.getCalenderHour().contains(assignmentData.pushHour1).click();
    AssignmentPage.getCalenderMinute()
      .contains(assignmentData.pushMin1)
      .click();
    AssignmentPage.getEndCalender().click();
    AssignmentPage.getActiveDate(assignmentData.pushDate).click();
    AssignmentPage.getCalenderHour1()
      .contains(assignmentData.pushHour2)
      .click();
    AssignmentPage.getCalenderMinute1()
      .contains(assignmentData.pushMin2)
      .click();
    //AssignmentPage.getCancel().click()
    AssignmentPage.getPush().click();
  });
  it("Log Out", () => {
    cy.Logout();
  });
});
