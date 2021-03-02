/*
Authors: Rishi, Harsha
Kindof flaky during loading resources But works
*/

import IndexPage from "../../support/pageObjects/IndexPage";
import StudentCurriculumPage from "../../support/pageObjects/StudentCurriculumPage";

const CREDENTIALS = require("../../fixtures/Credentials.json");
const CURRICULUM_DATA = require("../../fixtures/Curriculum-Data.json");
const IP = new IndexPage();
const CurriculumPage = new StudentCurriculumPage();

//const curriculumData = require('../../fixtures/organized/Curriculum-Data')

describe("My First test", () => {
  it("Login", () => {
    cy.Signin(CREDENTIALS.student.Username, CREDENTIALS.student.Password);
  });
  it("TC1,2 Curriculum Pre-Steps", () => {
    IP.getCurriculum().click();
    cy.wait(2000);
    CurriculumPage.getSubject().contains(CURRICULUM_DATA.subject).click();
    CurriculumPage.getCollapseArrow().click();
    CurriculumPage.getExpandArrow().click();
    CurriculumPage.getOpenClassList().click({ force: true });
    CurriculumPage.getClassList()
      .contains(CURRICULUM_DATA.class)
      .click({ force: true });
  });
  it("TC3,4,6 View the features and topic  videos of a selected chapter", () => {
    //change ch
    CurriculumPage.getChapter(0).click({ force: true });
    CurriculumPage.getFeaturesCollapse().click();
    CurriculumPage.getFeaturesExpand().click();
    cy.wait(10000);
    //CurriculumPage.getVideoPause() Deprecated
    CurriculumPage.getMediaControl().click();
    CurriculumPage.getChapterContent().click();
    CurriculumPage.getChapterContentResource().eq(4).click();
    CurriculumPage.getMediaControl().click();
    //Checking each Chapter Features
    CurriculumPage.getChapterFeatureResources().each(($el, idx, $list) => {
      CurriculumPage.getChapterFeatures().click();
      cy.wait(2000);
      let child = `[resources="selectedChapter.chapterResources"] > [index="${idx}"]`;
      cy.get(child).trigger("click",{force:true});
      cy.wait(2000);
    });
    cy.wait(10000);
  });
  it("TC8 Giving rating to a chapter Feature", () => {
    //cy.get('[ng-if="show.chapterFeatures"] > .ng-binding')
    CurriculumPage.getChapterFeatures().click();
    //cy.get('[resources="selectedChapter.chapterResources"] >')
    CurriculumPage.getChapterFeatureResources().eq(0).click();
    cy.wait(5000);
    CurriculumPage.getToggleRatingBar().click();
    CurriculumPage.getHighestRating()
      .click()
      .should("have.class", "noselect active");
    CurriculumPage.getLowestRating().click();
    CurriculumPage.getHighestRating().should(
      "not.have.class",
      "noselect active"
    );
    CurriculumPage.getToggleRatingBar().click();
  });
  it("TC12 Like a Chapter Feature", () => {
    CurriculumPage.getToggleFavorite().click();
  });
  it("TC11 Giving rating to a Animation(Video)", () => {
    //cy.get('a.ng-binding > .ng-binding')
    CurriculumPage.getChapterContent().click({ force: true });
    //cy.get('[resources="selectedChapter.animationResources"] >')
    CurriculumPage.getChapterContentResource().eq(0).click();
    cy.wait(5000);
    CurriculumPage.getToggleRatingBar().click();
    CurriculumPage.getHighestRating()
      .click()
      .should("have.class", "noselect active");
    CurriculumPage.getLowestRating().click();
    CurriculumPage.getHighestRating().should(
      "not.have.class",
      "noselect active"
    );
    CurriculumPage.getToggleRatingBar().click();
  });
  it("TC15 Like an Animation(Video)", () => {
    CurriculumPage.getToggleFavorite().click();
  });
  it("TC21 Create a New Note confirmation = Save", () => {
    let time = new Date().toLocaleString();
    cy.wait(5000);
    CurriculumPage.getNewNote().click();
    CurriculumPage.getNoteBox().type(time);
    CurriculumPage.getNoteSave().click();
    cy.wait(1000);
    CurriculumPage.getNoteText().then((text) => {
      var note = text.text();
      expect(note).to.contain(time);
    });
  });
  it("TC20 Create a New Note confirmation = Cancel", () => {
    let time = new Date().toLocaleString();
    cy.wait(5000);
    CurriculumPage.getNewNote().click();
    CurriculumPage.getNoteBox().type(time);
    CurriculumPage.getNoteCancel().click();
    cy.wait(1000);
    CurriculumPage.getNoteText().then((text) => {
      var note = text.text();
      expect(note).to.not.contain(time);
    });
  });
  it("Hide Notes", () => {
    CurriculumPage.getHideNote().click();
    CurriculumPage.getNoteText().should("not.be.visible");
  });
  it("TC28 Zoom in/Zoom out the chapter text book", () => {
    //cy.get('[ng-if="show.chapterFeatures"] > .ng-binding')
    CurriculumPage.getChapterFeatures().click();
    CurriculumPage.getChapterFeatureResources().eq(0).click();
    cy.wait(15000);
    CurriculumPage.getDocZoomIn().click();
    CurriculumPage.getDocCanvas()
      .invoke("attr", "width")
      .should("not.equal", String(Cypress.config("viewportHeight"))); //doc width is 716 for some reason
    CurriculumPage.getDocZoomOut().click();
    CurriculumPage.getDocCanvas()
      .invoke("attr", "width")
      .should("equal", String(Cypress.config("viewportHeight")));
  });
  it("TC31 Expand/Collapse a video", () => {});
  it("Log User Out", () => {
    cy.wait(2000);
    cy.Logout();
  });
});
