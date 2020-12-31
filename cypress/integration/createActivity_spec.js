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
          .trigger('click', {force:true})
    })

    it('Activity Setup', ()=>{
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
    })

    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});