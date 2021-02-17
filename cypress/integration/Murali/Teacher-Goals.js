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
    it('Goals',function() {
        TeacherOBJ.getCurriculam()
            .click()
        TeacherOBJ.getGoals()
            .click()
        TeacherOBJ.getGoalClass()
            .contains(Constvarbl.Class)
        TeacherOBJ.getGoalsubj()
            .contains(Constvarbl.Subject)
        TeacherOBJ.getGoalsection()
            .contains(Constvarbl.Section)
        cy.get('tr td:nth-child(3)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("A"))
            {
                $e1.click()
            }
        })
        TeacherOBJ.getGoalName()
            .type(Constvarbl.name)
        TeacherOBJ.getGoaldropdwn1()
            .contains(Constvarbl.Goal1)
        TeacherOBJ.getSetall()
            .click({ multiple: true })
        TeacherOBJ.getGoaldropdwn2()
            .contains(Constvarbl.Goal2)
        TeacherOBJ.getSetall()
            .click({ multiple: true })
        TeacherOBJ.getGoaldropdwn3()
            .contains(Constvarbl.Goal3)
        TeacherOBJ.getSetall()
            .click({ multiple: true })
        TeacherOBJ.getsavegoal()
            .click()
        cy.Logout()
    })       
})    