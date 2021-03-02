class Settings
{
    getSettings()
    {
        return cy.get('.settings')
    }
    getCurrentPasswd()
    {
        return cy.get('[name="currentPassword"]')
    }
    getNewPasswd()
    {
        return cy.get('[name="newPassword"]')
    }
    getVerifyPasswd()
    {
        return cy.get('[name="newPasswordVerify"]')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getSettingsCls()
    {
        return cy.get('select').eq(3).select('0')
    }
    getSettingsSection()
    {
        return cy.get('select').eq(4).select('0')
    }
    getStudntSettngs()
    {
        return cy.get('select').eq(5).select('0')
    }
    getCancelSettings()
    {
        return cy.get('[value="Cancel"]')
    }
    getFeedbackIcon()
    {
        return cy.get('.fa-pencil-square')
    }
    getFeedback()
    {
        return cy.get('[data-ng-model="feedback"]')
    }
    getCancelFeedback()
    {
        return cy.get('[ng-click="negativeResponse()"]')
    }
}
export default Settings