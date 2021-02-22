/*
Author: Murali
*/
/// <reference types="Cypress" />
import Settings from '../../support/pageObjects/Settings'
const settings = new Settings()
const setting = require('../../fixtures/Murali/Settings.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(setting.TeacherUserName,
            setting.TeacherPassword);
     }); 
    it('Settings',function() {
        cy.Curriculum()
        settings.getSettings()
            .click()
        settings.getCurrentPasswd()
            .type(setting.name)
        settings.getNewPasswd()
            .type(setting.pwd)
        settings.getVerifyPasswd()
            .type(setting.pwd)
        settings.getCheckbox()
            .check()  
        settings.getSettingsCls()
            .contains(setting.Class)
        settings.getSettingsSection()
            .contains(setting.Section)
        settings.getStudntSettngs()
            .contains(setting.pwdUser)
        settings.getCancelSettings()
            .click()
        settings.getFeedbackIcon()
            .click()
        settings.getFeedback()
            .type(setting.Description)
        settings.getCancelFeedback()
            .click()
        cy.Logout()
    })    
})    