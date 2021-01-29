const constantVars = require('../fixtures/baseData')
const credentials = require('../fixtures/cred.json')

const teacherData = require('../fixtures/TeacherAssignmentData.json')
const studentData = require('../fixtures/StudentDataAssignment.json')


describe('Live classess',()=>{
    /*it('Signin', ()=>{
        cy.signIn(credentials.orgURL+'login/index.html?',
                  credentials.teacherUsername,
                  credentials.teacherPassword);
    });
    it('Reach page', ()=>{
        //cy.visit(credentials.orgURL)
        cy.get('.dash-blk > .icon-live-classes').click({multiple:true})
        cy.get('.nice-select').first().click({force:true})
        cy.get('ul.list > li').contains('CBSE-Class 12').click()
        cy.wait(10000)
        //cy.contains('Chemistry').click()
        cy.get('.limit > :nth-child(2) > .ng-binding').click({force:true})

    })

    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })*/


    it('Signin', ()=>{
        cy.signIn(credentials.orgURL+'login/index.html?',
        credentials.teacherUsername,
        credentials.teacherPassword);
    });
    it('Reach page', ()=>{
        //cy.visit(credentials.orgURL)
        cy.get('.dash-blk > .icon-live-classes').click({multiple:true})
        cy.get('.nice-select').first().click({force:true})
        cy.wait(2000)
        cy.get('ul.list > li').contains('CBSE-Class 12').click()
        cy.wait(5000)
        cy.contains('Chemistry').click()
        //cy.get('.limit > :nth-child(2) > .ng-binding').click({force:true})

    })

    /*it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })*/

})