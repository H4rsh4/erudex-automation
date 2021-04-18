/*
Author:Harsha
Up to date; Needs Testing
*/

/// <reference types="cypress" />

//import { isPlainObject } from "cypress/types/lodash";
import IndexPage from "../../support/pageObjects/IndexPage";
import StudentActivityPage from "../../support/pageObjects/StudentActivityPage";

const IP = new IndexPage();
const ActivityPage = new StudentActivityPage();

const activityData = require("../../fixtures/Activity-Data.json");
const CREDS = require("../../fixtures/Credentials.json");

describe("Student Activity", () => {
  it("Signin", () => {
    cy.Signin(CREDS.student.Username, CREDS.student.Password);
  });
  it("Reach Activity Page", () => {
    IP.getCurriculum().click();
    IP.getActivity().click();
  });
  it("Select a Subject from the group", () => {
    //select Physics
    ActivityPage.getSubjectButton(activityData.subject).click();
    //Assert Chapters are visible
    ActivityPage.getChapterColumn().should("be.visible");
    //Select a chapter with pending activity //Atoms
  });
  it("Assert No activity message", () => {
    ActivityPage.getChapter(activityData.NoActivityChapter).click();
    ActivityPage.getNoActivityMsg().should("be.visible");
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include("Cannot read property 'should' of undefined")
  
      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      done()
  
      // return false to prevent the error from
      // failing this test
      return false
    })
  });
  it("Assert Icons are correct", () => {
    ActivityPage.getChapterWithActs().click();
    //Check the icons
    const PENDING_ICON_CLASS = "fa fa-clock-o";
    const COMPLETED_ICON_CLASS = "fa fa-check-circle";
    ActivityPage.getPendingIcon().should("have.class", PENDING_ICON_CLASS);
    ActivityPage.getCompletedIcon().should("have.class", COMPLETED_ICON_CLASS);
  });
  it("Check Pending Activities and Submit Activity", () => {
    //Get the first pending activity for submissal
    let pendAct1;
    ActivityPage.getPendingGrid()
      .click()
      .then(($obj) => {
        pendAct1 = $obj.text();
        //Check that the activity is displayed in the below container
        ActivityPage.getActiveActivityHeading().then(($obj) => {
          let actName2 = $obj.text();
          expect(actName2).to.eq(pendAct1.slice(0, actName2.length));
        });
      });

    //View resources
    ActivityPage.getResources().first().click();
    cy.wait(4000);
    ActivityPage.getCloseResouce().click({force:true});
    /*Submit Assignment
        ActivityPage.getSubmit()
          .click()
        */
  });
  it("Check Completed Activites", () => {
    //Completed Assignments
    //cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"]')
    //Get the first pending activity for submissal
    //cy.get('[ng-show="selectedChapter.completedAssignments && selectedChapter.completedAssignments.length > 0"] > ul > li')
    ActivityPage.getCompletedGrid()
      .click()
      .then(($obj) => {
        const completedActName1 = $obj.text();
        ActivityPage.getActivities().first().click();
        //Check that the activity is displayed in the below container
        ActivityPage.getActiveActivityHeading().then(($obj) => {
          let actName2 = $obj.text();
          expect(actName2).to.eq(completedActName1.slice(0, actName2.length));
        });
      });
  });
  //End of TCs
  it("Log Out", () => {
    cy.Logout();
  });
});
