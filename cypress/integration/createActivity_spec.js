//Haven't Tested Yet
//Error while checking resources
const constantVars = require('../fixtures/baseData')

const ACTIVITY_NAME = 'tets';
const CLASS         = 'Class 12';

describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(constantVars.URL+'login/index.html?',
                 constantVars.teacherUsername,
                 constantVars.teacherPassword);
    });

    it('Reach Create Activity Page', ()=>{
        //get Activity button
        cy.get('.dash-blk.gold[ui-sref="activityView"]')
          .trigger('click')
        //reach add Activity Page
        cy.get('[href="#/activity/create"]')
          .click({force:true})
    })

    it('Create Activity', ()=>{
        //Name
        cy.get('#txtAssignmentName')
          .type(ACTIVITY_NAME)
        //Select Class
        cy.get('select#selclass')
          .select(CLASS)
        //Subject
        cy.get('select#selSubject')
          .select('Physics');
        //Chapter
        cy.get('select#Select1')
          .select('12 . Atoms');
        //Type Description
        cy.get('.cke_wysiwyg_div.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders')
          .type('Some Desc');
        //Resources
        cy.get('[ng-click="addResourceLink()"]')
          .click()
        //View one resource
        cy.get('i.fa.fa-eye.resource-preview-icon')
          .first()
          .click()
        cy.get('[ng-click="closeModal()"]')
          .click({timeout:2000})
        //Add 5 of each resources
        cy.get('.columns.small-6.text-center[ng-show="viewLevel === \'chapter\'"] > :nth-child(2) >')
          .each((el, idx, list)=>{
            if(idx < 5){
              el.trigger('click');
            }
          })
        cy.get('.columns.small-6.text-center[ng-show="viewLevel === \'chapter\'"] > :nth-child(4) >')
          .each((el, idx, list)=>{
            if(idx < 5){
              el.trigger('click');
            }
          })
        cy.get('[ng-click="finishSelection()"]')
          .click()
        //Delete one resource
        cy.get('.fa.fa-trash.resource-delete-icon[ng-click="deleteResource($index)"]')
          .first()
          .click()
        //End of Resource
        
    })
    it('Push Activity', ()=>{
      //Push Button
      cy.get('#aCreateAndPush')
        .click()
      cy.get('[ng-change="onSectionChecked(section)"]')
        .check()
      //Start Date
      cy.get('i.fa.fa-calendar')
        .first()
        .click()
      cy.get('td.day.ng-binding.ng-scope.current')
        .click()
      cy.get('span.hour.current')
        .click()
      cy.get('span.minute.current')
        .click()
  
      //End Date
      cy.get('i.fa.fa-calendar')
        .last()
        .click()
      cy.get('td.day.ng-binding.ng-scope.future > :nth-child(2)')
        .click()
      cy.contains('10:00 AM')
        .click()
      cy.contains('10:30 AM')
        .click()
      //Final Push
      cy.get('[ng-click="submitPush()"]')
        .click()
    })

    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});