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
    it('Settings',function() {
        TeacherOBJ.getCurriculam()
            .click()
        TeacherOBJ.getSettings()
            .click()
        TeacherOBJ.getCurrPasswd()
            .type(Constvarbl.name)
        TeacherOBJ.getNewPasswd()
            .type(Constvarbl.pwd)
        TeacherOBJ.getVerifyPasswd()
            .type(Constvarbl.pwd)
        TeacherOBJ.getCheckbox()
            .check()  
        TeacherOBJ.getSettingsCls()
            .contains(Constvarbl.Class)
        TeacherOBJ.getSettingsSectn()
            .contains(Constvarbl.Section)
        TeacherOBJ.getStudntSettngs()
            .contains(Constvarbl.pwdUser)
        TeacherOBJ.getCancelSettings()
            .click()
        TeacherOBJ.getFeedbackIcon()
            .click()
        TeacherOBJ.getFeedback()
            .type(Constvarbl.Description)
        TeacherOBJ.getCancelFeedback()
            .click()
        cy.Logout()
    })    
})    