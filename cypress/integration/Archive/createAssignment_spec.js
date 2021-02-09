//Upload Error when attempting to Push
//Same Error as CreateActivity_spec
import AssignmentPage from '../support/pageObjects/AssignmentsPage.js'
import IndexPage from '../support/pageObjects/IndexPage.js'

const credentials = require('../fixtures/cred.json')
const constantVars = require('../fixtures/baseData')
const assignData = require('../fixtures/assignData.json')
const IndexPage = new IndexPage()
const AssignmentPage = new AssignmentPage()


describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.signIn(credentials.orgURL+'login/index.html?',
                 credentials.teacherUsername,
                 credentials.teacherPassword);
    });
    it('Reach Create Assignment Page', ()=>{
        IndexPage.getAssignment()
        IndexPage.getCreateAssignment()
    })
    it('Create Assignment', ()=>{
        AssignmentPage.getAssignmentName()
                      .type(assignData.Name)
        AssignmentPage.getClass()
                      .select(assignData.class)
        AssignmentPage.getSubjectName()
                      .select(assignData.Subject)
        AssignmentPage.getChapter()
                      .select(assignData.Chapter)
        AssignmentPage.getDescription()
                      .type(assignData.Desc)
    })
    it('Push Assignment', ()=>{
        AssignmentPage.getCreatePushButton()
                      .click()  
    })
    it('Log Out', ()=>{
        cy.logOut('[ng-click="logout()"]')
    })
});