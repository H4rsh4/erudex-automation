/*
Authors: Rajasekhar, Harsha
To-Do: Similar code structre as others using pageobjects and fixture data
*/
import 'cypress-wait-until';

//const constantVars = require("../../fixtures/baseData");
const credentials = require("../../fixtures/Credentials.json");

//const teacherData = require("../../fixtures/TeacherAssignmentData.json");
//const studentData = require("../../fixtures/StudentDataAssignment.json");

describe("Live classess", () => {
  it("Signin", () => {
    cy.Signin(
      "eru.harish",
      "eru.harish"
    );
  });
  it("Reach page", () => {
    cy.intercept({
      pathname: "/ErudexWebService/rest/live-class/getMeetings"
    }).as('LC-Data')
    cy.intercept({
      pathname: "/user/getUserCurriculum"
    }).as('Curr-Data')
    cy.intercept({
      pathname: "/userActivity/addPageActivity"
    }).as('PageActivityData')


    //cy.waitForResourceToLoad('index.html', 'script');
    cy.get(".dash-blk > .icon-live-classes").click({ multiple: true });
    cy.wait('@Curr-Data').its('response.statusCode').should('eq', 200)
    cy.get(".nice-select").first().click({ force: true });
    cy.wait('@PageActivityData').then((req)=>[
      expect(req.response.statusCode).to.eq(200)
    ])
    cy.get("ul.list > li").contains("CBSE-Class 12").click({ force: true });
    cy.contains("Chemistry").click()
    cy.wait('@LC-Data').then((req)=>[
      expect(req.response.statusCode).to.eq(200)
    ])
    //cy.get('.limit > :nth-child(2) > .ng-binding').click({force:true})

  });

  it("Log Out", () => {
    cy.Logout();
  });
});
