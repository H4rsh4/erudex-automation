/// <reference types="Cypress" />

import Curriculam from "../../support/pageObjects/Curriculam";
const CurriculumPage = new Curriculam();

const cred = require("../../fixtures/Credentials.json");
const curriclumData = require("../../fixtures/Curriculum.json");
describe("Curriculum", function () {
  it("Signin", () => {
    cy.Signin(cred.TeacherUserName, cred.TeacherPassword);
  });
  it("Curriculam page", function () {
    cy.Curriculum();
    CurriculumPage.getGrades().click({ force: true });
    //CurriculumPage.getSubChemistry()
    //    .click()
    //CurriculumPage.getSubMathematics()
    //    .click()
    //CurriculumPage.getSubPhysics()
    //    .click()
    CurriculumPage.getarrowleft().click();
    CurriculumPage.getarrowleft().click();
    CurriculumPage.getrefresh().click();
    cy.contains(curriclumData.Chapter1).click();
    cy.wait(10000);
    CurriculumPage.getPdfNext().click();
    CurriculumPage.getPdfZoomOut().click();
    CurriculumPage.getPdfZoomIn().click();
    CurriculumPage.getPdfFitpage().click();
    CurriculumPage.getChapterContent().click();
    CurriculumPage.getchaptercontentclose().click();
    CurriculumPage.getChapterFeature().click();
    CurriculumPage.getChapterNotes().click();
    CurriculumPage.getNotesArea().click();
    CurriculumPage.getNotesTyping().type(curriclumData.videoNotes);
    CurriculumPage.getSaveNote().click();
    CurriculumPage.getNavigateback().click();
  });
  it('Logout', ()=>{
    cy.Logout()
  })
});
