/// <reference types="Cypress" />
import Grade from '../../support/pageObjects/Grade'
import 'cypress-wait-until';
const grade = new Grade()
const grading = require('../../fixtures/Grading.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(grading.TeacherUserName,
                  grading.TeacherPassword);
      });
    it('Reach-Grade', ()=>{
        cy.intercept({
            pathname:"/ErudexWebService/rest/assignment/getGradeBookAssignments"
        }).as('GradeBookAssignments')
        cy.intercept({
            pathname: "/user/getUserCurriculum"
        }).as('Curr-Data')
        cy.intercept({
            pathname: "/userActivity/addPageActivity"
        }).as('PageActivityData')
        cy.intercept({
            pathname:"/ErudexWebService/rest/assignment/pushAssignment"
        }).as('pushAssignment')
      
        cy.Curriculum()
			cy.wait('@Curr-Data').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})
       
        grade.getGradebook().click()
			cy.wait('@PageActivityData').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})
			cy.wait('@Curr-Data').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})
        grade.getClass().contains(grading.Class).should('have.text','Class 12')
			cy.wait('@PageActivityData').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})
        grade.getSection().contains(grading.Section)
			/*cy.wait('@PageActivityData').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})*/

        grade.getSubject().contains(grading.GradeSubj).should('have.text','Physics')
			cy.wait('@GradeBookAssignments').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})
        //cy.waitForResourceToLoad();
        cy.contains(grading.AddAssign).click({force:true})
			/*cy.wait('@GradeBookAssignments').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})*/
        grade.getChapter().contains(grading.gradechapter).should('have.value','3')
			/*cy.wait('@PageActivityData').then((req)=>{
				expect(req.response.statusCode).to.eq(200)
			})*/
        
        grade.getAssesmentName().type(grading.AssessName,{force:true})

        grade.getCalender1().click({force:true})
    
        grade.getDate().contains(grading.Date1).click({force:true})

        grade.getCalender2().click({force:true})
        
        grade.getDate().contains(grading.Date2).click({force:true})
        
        grade.getMarks().contains(grading.Marks)
        
        // cy.contains(grading.CreateNdPush).click({force:true})
        // cy.wait('@PageActivityData').then((req)=>{
        //     expect(req.response.statusCode).to.eq(200)
        // })
    })
    //it('Logout', ()=>{
    //    cy.Logout()
    //})    
})
    