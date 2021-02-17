/*
Author: Harsha
Todo: Consistency and fixture data
*/

/// <reference types="cypress" />

import IndexPage from "../support/pageObjects/IndexPage.js"
import TeacherAssessmentPage from "../support/pageObjects/TeacherAssessmentPage.js"

//fixture data
const CREDS = require('../fixtures/Credentials.json')
const assessmentData = require('../fixtures/Assessment-data.json')
//files module
const fs = require('fs')

const IP = new IndexPage();
const AssessmentPage = new TeacherAssessmentPage();

const qidData = {};
const ansText = {
  "(1)":"option_1",
  "(2)":"option_2",
  "(3)":"option_3",
  "(4)":"option_4",
}

describe('Teacher-Student Assessment Pipeline', ()=>{
  //it('Signin', ()=>{
  //  cy.Signin(CREDS.teacher.Username,
  //            CREDS.teacher.Password);
  //});
  it('Reach Create Assessment Page', ()=>{
    cy.visit(CREDS.URL)
    IP.getAssessment()
             .trigger('click')
   //reach add Assignment Page
    IP.getCreateAssessment()
             .click({force:true})
  })
  it('Assessment Setup', ()=>{
    AssessmentPage.getAssessmentName()
      .type(assessmentData.name)
    AssessmentPage.getClass()
      .select(assessmentData.class)
    cy.wait(2000)
    AssessmentPage.getSubject()
      .select(assessmentData.subject)
    AssessmentPage.getDifficulty()
      .select(assessmentData.difficulty)
             
  })
  it('Select Number of Questions and Press OK', ()=>{
    AssessmentPage.getManualSelection()
      .click()
    //Question Table
    //extra wait time as the table can take a while to load
    cy.wait(5000)
    AssessmentPage.getQuestionsTable()
      .each(($el, index, $list) =>{
        if(index > assessmentData.numberOfQuestions) return;
        else {
          cy.get('td.ng-binding[ng-click="viewQuestion(rec)"]').eq(index).then(($obj)=>{
            let ques = $obj.text();
            let pos = ques.indexOf('(');
            let qid = ques.slice(pos+1, -1);
            cy.get('.correct-mcq-option .ques-opt').eq(index).then(($obj)=>{
              let anstxt = $obj.text();
              let ans = ansText[anstxt]
              qidData[qid] = ans
              //console.log(qid, ans, qidData[qid])
            })
          })
          $el.trigger('click')
        }
      })
    AssessmentPage.getOkay()
      .scrollIntoView()
      .click({force: true})
    })
    it('Write qidData to file', ()=>{
      //todo
      //or put student here as well
      cy.log('nah fam')
    })
    it('Push Assessment',()=>{
    //cy.get(' .columns.medium-12.small-12 > [ng-click="createAssessment()"]')
    //  .scrollIntoView()
     // .click({force: true})
    //cy.wait(4000)
    AssessmentPage.getOkay()
            .click({force: true})
    AssessmentPage.getCreateandPush()
        .click({force: true})
    AssessmentPage.getCheckbox()
        .check()
            .should('be.checked')
    AssessmentPage.getPushCalender1()
        .click()
    AssessmentPage.getDateandTime()
        .contains(assessmentData.pushDate)
            .click()
    AssessmentPage.getCalenderHour()
        .contains(assessmentData.pushHour1)
            .click()
    AssessmentPage.getCalenderMinute()
        .contains(assessmentData.pushMin1)
            .click()
    AssessmentPage.getPushCalender2()
        .click()
    AssessmentPage.getDateandTime1()
        .contains(assessmentData.pushDate)
            .click()
    AssessmentPage.getCalenderHour1()
        .contains(assessmentData.pushHour2)
            .click()
    AssessmentPage.getCalenderMinute1()
        .contains(assessmentData.pushMin2)
            .click()
    AssessmentPage.getCancel()
        .click()
    })
  //Assertions Fail
  it('Check Created assignment', ()=>{
    cy.get('a[ui-sref="assessmentList"]').eq(0).click({force:true})
    cy.get('[ng-click="showPushedAssessments()"]').click()
    cy.wait(2000)
    //cy.get(' table.f-table.striped.coursework-list-table > tbody > tr > td:nth-child(2)')
    //Getting error that the element is empty?
    //cy.get('.f-table > tbody > :nth-child(1) > :nth-child(2)')
    cy.get('tr.ng-scope:nth-child(1) > td.ng-binding:nth-child(2)').then(($obj)=>{
      let tex = $obj.text()
      tex = (tex.slice(tex.indexOf('\n')+2, tex.lastIndexOf('\n'))).trim()
      expect(tex).to.eq(assessmentData.name)
    })
  })
  //it('Log Out', ()=>{
  //      cy.Logout()
  //  })
})