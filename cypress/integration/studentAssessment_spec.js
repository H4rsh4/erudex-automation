const constantVars = require('../fixtures/baseData')

describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(constantVars.URL+'login/index.html?',
                 constantVars.studentUsername,
                 constantVars.studentPassword);
    });
    it('Start Assessment', ()=>{
        //get Assignment button
        cy.get('.dash-blk > .icon-assessment')
          .trigger('click')
        //select Assignment
        cy.get('[title="Assessment Test"]')
          .parent()
          .click()
        cy.get('[ng-click="onStartAssessment()"]')
          .click()
    })
    it('Take Test', ()=>{
        //Get the Answers
        const answers = constantVars.qid;
        //and initialize an Array for loop
        const randArray = Array.from({length: 5})
        cy.wrap(randArray)
          .each((el, idx, li)=>{
            //Get the Question ID object to extract qid
            cy.contains('QID')
              .then(($qid)=>{
                //Process the String for qid
                let questiontxt = $qid.text();
                let pos = questiontxt.indexOf('QID:');
                let qid = questiontxt.slice(pos+5, -1);
                //select the appropriate option
                cy.get(`[for="${answers[String(qid)]}"]`)
                  .click()
            })
            //Press Save and Next
            cy.get('[ng-click="(timer.value > 0) && saveQuestion(currentPage, currentQuestion, \'answered\')"]')
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
        cy.logOut('[ng-click="logout()"]')
    })
});