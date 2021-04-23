/// <reference types="cypress" />

import StudentMockTest from "../../support/pageObjects/Student-MockTest.js"

const CREDENTIALS = require("../../fixtures/Credentials.json");
const MOCKTEST_DATA = require('../../fixtures/MockTest-Data.json')
const page = new StudentMockTest();

const curr = "JEE-Mains";
const testType = "Part Tests";
const test = 'Available';
const examTitle = "22/4 smm part test "

describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.Signin(CREDENTIALS.student.Username,
                 CREDENTIALS.student.Password);
    });
    it('Reach Mocktest', ()=>{
        page.getTests().click();
        page.getExamCurriculum(MOCKTEST_DATA.curriculumType).click();
        page.getTestType(MOCKTEST_DATA.testType).click();
        page.getTestAvailabilityRadio(MOCKTEST_DATA.testAvailability).click();
        //Exam Table
        //Assert Number of questions
        cy.contains(examTitle)
          .parentsUntil("mCSB_4_container")
          .children('.exam-data')
          .children('.exam-data-details')
          .children('li').last()
          .children('span.ng-binding').then(($el)=>{
              expect($el.text()).to.include(MOCKTEST_DATA.totalQs + " Questions")
          })
          //.should('include', MOCKTEST_DATA.totalQs + " Questions")
        page.getExamSyllabus(MOCKTEST_DATA.examName).click();
        page.getModalOk().click();
        page.TakeTest(MOCKTEST_DATA.examName).then(($el)=>{
            let te = $el.text();
            cy.log(te)
        })
    })
    
    it('Log Out', ()=>{
        cy.Logout()
    });
});