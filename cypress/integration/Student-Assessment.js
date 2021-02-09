/*
Authors: Harsha
Up to Date; Needs Testing
*/
import IndexPage from '../support/pageObjects/IndexPage'
import AssessmentPage from '../support/pageObjects/AssessmentPage'

const CREDENTIALS = require('../fixtures/Credentials.json')
const ASSESSMENT_DATA = require('../fixtures/Assessment-Data.json')
const IndexPage = new IndexPage();
const AssessmentPage = new AssessmentPage();

describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.Signin(CREDENTIALS.student.Username,
                 CREDENTIALS.student.Password);
    });
    it('Begin Assessment', ()=>{
        IndexPage.getAssessment()
                 .trigger('click')

        AssessmentPage.getAssessment(ASSESSMENT_DATA.title)
                      .click()
        AssessmentPage.startAssessment()
                      .click()
    })
    it('Take Assessment', ()=>{
        //Get the Answers
        const answers = ASSESSMENT_DATA.student.qid;
        //and initialize an Array for loop
        let dictLength = Object.keys(answers).length
        const randArray = Array.from({length: dictLength})

        cy.wrap(randArray)
          .each((el, idx, li)=>{
            //Get the Question ID object to extract qid
            cy.contains('QID')
              .then(($qid)=>{
                //Process the String for qid
                let questiontxt = $qid.text();
                //qid QID:
                //qid QID:12187
                let pos = questiontxt.indexOf('QID:');
                let qid = questiontxt.slice(pos+5, -1);
                //select the appropriate option
                cy.get(`[for="${answers[String(qid)]}"]`)
                  .click()
            })
            //Press Save and Next
            AssessmentPage.getSaveNext()
                          .click()
            cy.wait(1000)           
          })
        //Submit
        cy.get('.pull-right')
          .click()
        cy.get('.success')
          .click()
        cy.get('.ng-binding > .button')
          .click()
    })
    it('Log Out', ()=>{
        cy.Logout()
    })
});