/// <reference types="Cypress" />
import Settings from '../../support/pageObjects/Settings'
const SettingsPage = new Settings()

const cred = require('../../fixtures/Credentials.json')
const settingData = require('../../fixtures/Settings.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(cred.TeacherUserName,
            cred.TeacherPassword);
     }); 
    it('Settings',function() {
        cy.Curriculum()
        SettingsPage.getSettings()
            .click()
        SettingsPage.getCurrentPasswd()
            .type(settingData.name)
        SettingsPage.getNewPasswd()
            .type(settingData.pwd)
        SettingsPage.getVerifyPasswd()
            .type(settingData.pwd)
        SettingsPage.getCheckbox()
            .check()  
        SettingsPage.getSettingsCls()
            .contains(settingData.Class)
        SettingsPage.getSettingsSection()
            .contains(settingData.Section)
        SettingsPage.getStudntSettngs()
            .contains(settingData.pwdUser)
        SettingsPage.getCancelSettings()
            .click()
        SettingsPage.getFeedbackIcon()
            .click()
        SettingsPage.getFeedback()
            .type(settingData.Description)
        SettingsPage.getCancelFeedback()
            .click()
        //cy.Logout()
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    