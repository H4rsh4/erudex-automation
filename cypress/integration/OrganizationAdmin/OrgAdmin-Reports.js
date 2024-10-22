/*
Author: Harsha
To-Do:
- Hover over graphs
*/
import orgAdmin from "../../support/pageObjects/orgAdmin.js";

const credentials = require("../../fixtures/Credentials.json");
const orgAdminPage = new orgAdmin();

const initArray = (Length) => {
  return cy.wrap(Array.from({ length: Length }));
};
const returnToDashboard = () => {
  //Return to Dashboard
  orgAdminPage.getReportsBody().contains("Dashboard").last().parent().click();
};

const pressTimeButtons = (numberOfButtons) => {
  initArray(numberOfButtons).each((el, idx, li) => {
    orgAdminPage
      .getReportsBody()
      .find(".MuiButton-label")
      .eq(idx)
      .click({ force: true });
    cy.wait(3000);
  });
};

describe("Create and Push Activity", () => {
  it("Signin", () => {
    cy.Signin(credentials.OrgAdmin.Username, credentials.OrgAdmin.Password);
  });
  it("Time Buttons", () => {
    //cy.visit(credentials.URL);
    pressTimeButtons(3);
  });
  it("Content Usage", () => {
    //Content Usage reports
    cy.wait(4000);
    orgAdminPage.getReport("Content Usage (Hrs)")
    const pressFirstRow = () => {
      orgAdminPage
        .getReportsBody()
        .find('table[aria-label="purchases"]')
        .eq(0)
        .then(($obj) => {
          $obj.find("tbody:nth-child(1)").trigger("click", { force: true });
        });
    };
    initArray(3).each((el, idx, li) => {
      cy.wait(2000);
      pressFirstRow();
    });
    pressTimeButtons(6);
    //Return to Dashboard
    returnToDashboard();
  });

  it("Test Usage", () => {
    orgAdminPage
      .getReportsBody()
      .contains("Tests")
      .parent()
      .then(($obj) => {
        $obj.find("button.MuiButtonBase-root").click();
      });
    pressTimeButtons(5);
    //Return to Dashboard
    returnToDashboard();
  });

  it("Live Classes", () => {
    orgAdminPage.getReport("Live Classes");
    pressTimeButtons(5);
    //Return to Dashboard
    returnToDashboard();
  });

  it("Assignments Usage", () => {
    orgAdminPage.getReport("Assignments");
    pressTimeButtons(5);
    returnToDashboard();
  });

  it("Log Out", () => {
    cy.Logout();
  });
});
