import Signin from "../../support/pageObjects/Signin";
import AssigningPage from "../../support/pageObjects/AssigningPage";
describe("testing", () => {
  beforeEach(function () {
    cy.fixture("DataEntryData").then(function (data) {
      this.data = data;
    });
    cy.fixture("TeacherAssignmentData").then(function (teacher) {
      this.teacher = teacher;
    });
    cy.fixture("StudentDataAssignment").then(function (student) {
      this.student = student;
    });
  });
  it("Data Entry signin", function () {
    const signin = new Signin();
    cy.visit(Cypress.env("url"));
    signin.getUsername().first().should("be.visible").type(this.data.username);
    signin.getPassword().first().type(this.data.password);
    signin.getSubmit().first().click();
    signin.getPopup().contains("Yes").should("be.visible").click();
  });
  it("Live Class Assigning", function () {
    const assigning = new AssigningPage();
    cy.get(".icon-live-classes").click();
    cy.get(".button").click();
    cy.get(".dropdown-select > select").eq(0).select(this.data.grade);
    cy.get(".dropdown-select > select").eq(1).select(this.data.class);
    cy.get(".dropdown-select > select").eq(2).select(this.data.subject);
    cy.get(".dropdown-select > select").eq(3).select("0");
    cy.get("span.current")
      .click()
      .then(function () {
        cy.get("li.option").contains("1 Hour").click();
      });

    assigning.getCalendar().first().click();
    assigning.getDate().next().click();
    assigning.getHour().contains(this.data.starthour).click();
    assigning.getMinute().contains(this.data.startminute).click();
    cy.get("textarea").type(" Checking the Typing Flecibility");
    cy.get(".button").click();
    cy.get('[ng-click = "onEdit(meet)"]').first().click({ multiple: true });
    cy.get("textarea").clear().type("Edit Functionality");
    cy.get(".button").click({ multiple: true });
    cy.get('[ng-click="teacherAssign(meet)"]').click();
    cy.get('[ng-model="selectedInstitution"]').select(
      "Erudex QA Test - 2 (ER-SCH0062)"
    );
    cy.get('[ng-model="selectedTeacher"]').select("eru.teacher1");
    cy.get('[ng-click="positiveResponse()"]').click();
    cy.get('[ng-click="publishToSections(meet)"]').click({ force: true });
    cy.get("div.columns.text-left").click();
    cy.get("div>b.ng-binding").click();
    cy.get('[ng-click="onUpdateMeeting()"]').click();
    cy.get('[ng-click="onDeleteMeeting(meet)"]').click();
    cy.get("i.fa.fa-power-off").click({ force: true });
  });
  it("Teacher Login", function () {
    const signin = new Signin();
    signin
      .getUsername()
      .first()
      .should("be.visible")
      .type(this.teacher.username);
    signin.getPassword().first().type(this.teacher.password);
    signin.getSubmit().first().click();
    signin.getPopup().contains("Yes").should("be.visible").click();
  });
  it("Teacher Live Class Assigned Check", function () {
    cy.get("span.icon-live-classes").click({ multiple: true });
    cy.get(".nice-select").first().click({ force: true });
    cy.get("ul.list > li").contains("CBSE-Class 12").click();
    cy.get('[class="ng-binding"]').contains("Chemistry").click({ force: true });
    cy.wait(5000);
    cy.get("i.fa.fa-power-off").click({ force: true });
  });
  it("Student Signin", () => {
    const signin = new Signin();
    signin
      .getUsername()
      .first()
      .should("be.visible")
      .type(this.student.username);
    signin.getPassword().first().type(this.student.password);
    signin.getSubmit().first().click();
    signin.getPopup().contains("Yes").should("be.visible").click();
  });
  it("Student Reach page", () => {
    cy.get(".dash-blk > .icon-live-classes").click({ multiple: true });
    cy.get(".nice-select").first().click({ force: true });
    cy.wait(2000);
    cy.get("ul.list > li").contains("CBSE-Class 12").click();
    cy.wait(5000);
    cy.contains("Chemistry").click();

    //cy.get('.limit > :nth-child(2) > .ng-binding').click({force:true})
  });
});
