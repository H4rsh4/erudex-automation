const constantVars = require('../fixtures/baseData')

describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(constantVars.URL+'login/index.html?',
                 constantVars.teacherUsername,
                 constantVars.teacherPassword);
    });


    
    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});