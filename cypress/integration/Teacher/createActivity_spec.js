//Create&Push button throws Upload error
//xhr POST command getting aborted while testing; couldn't reproduce while checking manually
import ActivityPage from '../support/pageObjects/ActivityPage.js'
import AssigningPage from '../support/pageObjects/AssigningPage.js';
const credentials = require('../fixtures/cred.json')
const constantVars = require('../fixtures/baseData')
const activityData = require('../fixtures/activityData.json')
const ActivityPage = new ActivityPage();
const AssigningPage = new AssigningPage();


describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(credentials.orgURL+'login/index.html?',
                 credentials.teacherUsername,
                 credentials.teacherPassword);
    });
    it('Reach Create Activity Page', ()=>{
        //cy.visit(constantVars.URL)
        //get Activity button
        cy.get('.dash-blk.gold[ui-sref="activityView"]')
          .trigger('click')
        //reach add Activity Page
        cy.get('[href="#/activity/create"]')
          .click({force:true})
    })
    it('Create Activity', ()=>{
        //Name
        ActivityPage.getActivityName()
                    .type(activityData.Name)
        //Select Class
        ActivityPage.getClass()
                    .select(activityData.Class)
        //Subject
        ActivityPage.getSubjectName()
                    .select(activityData.Subject);
        //Chapter
        ActivityPage.getChapter()
                    .select(activityData.Chapter);
        //Type Description
        ActivityPage.getDescription()
                    .type(activityData.Desc);
        //Resources
        ActivityPage.getResources()
                    .click()
        //View one resource
        ActivityPage.getResourcepreview()
                    .first()
                    .click()
        ActivityPage.getClosePreview()
                    .click()
        //wait for dialog to close
        cy.wait(2000)
        //Add 5 of each resources
        let randArray = Array.from({length: 7})
        cy.wrap(randArray)
          .each((el, idx, list)=>{
            if(idx > 1 && idx < 7){
              cy.get(`[ng-show="viewLevel === \'chapter\'"] > :nth-child(2) > :nth-child(${idx})`)
                .click()
              cy.get(`.columns.small-6.text-center[ng-show="viewLevel === \'chapter\'"] > :nth-child(4) > :nth-child(${idx})`)
                .click()
            }
          })
        cy.get('[ng-click="finishSelection()"]')
          .click()
        //Delete one resource
        ActivityPage.getDeleteResource()
                    .first()
                    .click()
        //End of Resource
        
    })
    it('Push Activity', ()=>{
      //Push Button
      ActivityPage.getCreatePushButton()
                  .click()
      //ActivityPage.getCheckSection
      //        .check()
      AssigningPage.getSectionCheckBox()
                    .click()
      //Start Date
      AssigningPage.getCalendar()
                  .first()
                  .click()
      AssigningPage.getDate()
                   .click()    
      AssigningPage.getHour()
                   .click()
      AssigningPage.getMinute()
                   .click()  
      //End Date
      AssigningPage.getCalendar()
                   .last()
                   .click()
      AssigningPage.getDate()
                   .click()    
      AssigningPage.getHour()
                   .click()
      AssigningPage.getMinute()
                   .click()  
      /*cy.get('td.day.ng-binding.ng-scope.future > :nth-child(2)')
        .click()
      cy.contains('10:00 AM')
        .click()
      cy.contains('10:30 AM')
        .click()*/
      //Final Push
      //cy.get('[ng-click="submitPush()"]')
      //  .click()
    })

    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});