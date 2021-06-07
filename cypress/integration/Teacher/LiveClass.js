import Signin from "../../support/pageObjects/Signin";
import AssigningPage from "../../support/pageObjects/AssigningPage";
describe("testing", () => {
  beforeEach(function () {
    cy.fixture("TeacherAssignmentData").then(function (data) {
      this.data = data;
    });
  });
  it("signin", function () {
    const signin = new Signin();
    cy.visit(Cypress.env("url"));
    signin.getUsername().first().should("be.visible").type(this.data.username);
    signin.getPassword().first().type(this.data.password);
    signin.getSubmit().first().click();
    signin.getPopup().contains("Yes").should("be.visible").click();
  });
  it("Live Class Assigning", function () {
    const assigning = new AssigningPage();
    cy.get("span.icon-live-classes").click();
    cy.get(".create").click();
    cy.get(".dropdown-select > select").eq(0).select("0");
    cy.get(".dropdown-select > select").eq(1).select("0");
    cy.get(".dropdown-select > select").eq(2).select("0");
    cy.get(".dropdown-select > select").eq(3).select("0");
    cy.get('[type = "checkbox"]').click();
    cy.get("span.current")
      .click()
      .then(function () {
        cy.get("li.option").contains("60 Min").click();
      });

    assigning.getCalendar().first().click();
    assigning.getDate().next().click();
    // .should("not.have.class", "disabled")

    // .then(function (date) {
    //   date.contains(this.data.startdate).click();
    // });
    assigning.getHour().contains(this.data.starthour).click();
    assigning.getMinute().contains(this.data.startminute).click();
  });
});
