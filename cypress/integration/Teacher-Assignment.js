
/*
Author: Harsha, Rajasekhar
*/
//Upload Error when attempting to Push
//Same Error as CreateActivity_spec
import AssignmentPage from '../support/pageObjects/AssignmentsPage.js'
import IndexPage from '../support/pageObjects/IndexPage.js'

const credentials = require('../fixtures/cred.json')
const constantVars = require('../fixtures/baseData')
const assignData = require('../fixtures/assignData.json')
const IndexPage = new IndexPage()
const AssignmentPage = new AssignmentPage()


describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(credentials.orgURL+'login/index.html?',
                 credentials.teacherUsername,
                 credentials.teacherPassword);
    });
    it('Reach Create Assignment Page', ()=>{
        IndexPage.getAssignment()
        IndexPage.getCreateAssignment()
    })
    it('Create Assignment', ()=>{
        AssignmentPage.getAssignmentName()
                      .type(assignData.Name)
        AssignmentPage.getClass()
                      .select(assignData.class)
        AssignmentPage.getSubjectName()
                      .select(assignData.Subject)
        AssignmentPage.getChapter()
                      .select(assignData.Chapter)
        AssignmentPage.getDescription()
                      .type(assignData.Desc)
    })
    it('Push Assignment', ()=>{
        AssignmentPage.getCreatePushButton()
                      .click()  
    })
    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});


/*
import AssigningPage from "../../support/pageObjects/AssigningPage";
import AssignmentPage from "../../support/pageObjects/AssignmentsPage";
import IndexPage from "../../support/pageObjects/IndexPage";
import Signin from "../../support/pageObjects/Signin";

describe("testing", () => {
  beforeEach(function () {
    cy.fixture("TeacherAssignmentData").then(function (data) {
      this.data = data;
    });
  });
  it(" Teacher Signin", function () {
    const signin = new Signin();
    cy.visit(Cypress.env("url"));
    signin.getUsername().first().should("be.visible").type(this.data.username);
    signin.getPassword().first().type(this.data.password);
    signin.getSubmit().first().click();
    signin.getPopup().click();

    // signin.getPopup().then((body) => {
    //   if (
    //     body.find(
    //       "p:contains(Do you want to login here instead? (Other session will be logged out))"
    //     )
    //   ) {
    //     signin.getPopup().contains("Yes").should("be.visible").click();
    //   }
    // });// cy.get("div.row.text-center").contains("Yes").click();
    // cy.get("body").then((body) => {
    //   if (body.find("div.button.success.radius").contains("Yes")) {
    //     cy.get("div.button.success.radius").click();
    //   }
    // });
  });
  it("Assignment Creation", function () {
    const file = "Erudex.png";
    const index = new IndexPage();
    const assignment = new AssignmentPage();
    index.getAssignment().click();
    index.getDropdownAssignment().click();
    index.getCreateAssignment().click();
    assignment.getAssignmentName().type(this.data.assignmentname);
    assignment.getClass().select(this.data.class);
    assignment.getSubjectName().select(this.data.subject);
    assignment.getChapter().select("0");
    assignment.setMarks().select("0");
    assignment.getDescription().type("This is from Cypress Automation");
    assignment.getSpecialInstructions().type("Special Instruction Working");
    cy.get(".text-left > .button").attachFile(file);
    assignment.getCreatePushButton().click();
  });
  it("Assigning Assignment", function () {
    const assigning = new AssigningPage();
    assigning.getSectionCheckBox().check();
    assigning.getSectionArrow().click();
    assigning.getCalendar().first().click();
    assigning.getDate().contains(this.data.startdate).click();
    cy.log(this.data.startdate);
    assigning.getHour().contains(this.data.starthour).click();
    assigning.getMinute().contains(this.data.startminute).click();
    assigning.getCalendar().last().click();
    assigning.getDate().contains(this.data.enddate).click();
    assigning.getHour().contains(this.data.endhour).click();
    assigning.getMinute().contains(this.data.endminute).click();
    assigning.getSubmitPush().click();
  });
});

*/