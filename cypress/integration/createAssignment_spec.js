//Upload Error when attempting to Push
//Same Error as CreateActivity_spec

const constantVars = require('../fixtures/baseData')

describe('Create and Push Activity', ()=>{
    /*it('Signin', ()=>{
       cy.signIn(constantVars.URL+'login/index.html?',
                 constantVars.teacherUsername,
                 constantVars.teacherPassword);
    });*/

    it('Reach Create Assignment Page', ()=>{
        cy.visit(constantVars.URL)
        //get Activity button
        cy.get('.dash-blk > .icon-assignment')
          .trigger('click')
        //reach add Activity Page
        cy.get('[href="#/assignment/create"]')
          .click({force:true})
    })
    it('Create Assignment', ()=>{
        //Name
        cy.get('#txtAssignmentName')
          .type('Assignment Name')
        //Select Class
        cy.get('select#selclass')
          .select('Class 12')
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
    it('Push Assignment', ()=>{
        cy.get('#aCreateAndPush')
          .click()
        
    })
    
    /*it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })*/
});