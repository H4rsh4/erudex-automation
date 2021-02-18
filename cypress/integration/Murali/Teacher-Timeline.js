/*
Author: Murali
*/
/// <reference types="Cypress" />
import Teacherobj from '../../support/pageObjects/Teacherobj'
const TeacherOBJ = new Teacherobj()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('Timeline',function() {
        TeacherOBJ.getCurriculam()
            .click()
        TeacherOBJ.getTimeline()
            .click()
        TeacherOBJ.getLastweek()
            .click()
        TeacherOBJ.getThisMonth()
            .click()
        TeacherOBJ.getnext()
            .click()
        TeacherOBJ.getprevious()
            .click()
        TeacherOBJ.getThisweek()
            .click()    
        cy.Logout()
    })    
})    