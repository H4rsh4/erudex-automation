class Goals
{
    getGoals()
    {
        return cy.get('.goals')
    }
    getClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getSubject()
    {
        return cy.get('select').eq(2).select('3')
    }
    getSection()
    {
        return cy.get('select').eq(3).select('0')
    }
    getGoalName()
    {
        return cy.get('[type="text"]')
    }
    getSelectGoal1()
    {
        return cy.get('select').eq(4).select('0')
    }
    getSetall()
    {
        return cy.get('.set-all-btn')
    }
    getSelectGoal2()
    {
        return cy.get('select').eq(5).select('0')
    }
    getSelectGoal3()
    {
        return cy.get('select').eq(6).select('0')
    }
    getsavegoal()
    {
        return cy.get('[ng-click="saveGoals()"]')
    }
}
export default Goals