class Liveclass
{
    getLiveClass()
    {
        return cy.get('.icon-live-classes')
    }
    getMonth()
    {
        return cy.get('ul li.option')
    }
    getInprogress()
    {
        return cy.get('.inprogress')
    }
    getUnAttended()
    {
        return cy.get('.unattended')
    }
    getLiveClassCreate()
    {
        return cy.get('[ui-sref="liveClasses.create"]')
    }
    getCurriculum()
    {
        return cy.get('select').eq(1).select('0')
    }
    getClass()
    {
        return cy.get('select').eq(2).select('1')
    }
    getSubject()
    {
        return cy.get('select').eq(3).select('3')
    }
    getChapter()
    {
        return cy.get('select').eq(4).select('1')
    }
    getStartCalender()
    {
        return cy.get('.fa-calendar')
    }
    getActiveDate(date)
    {
        return cy
          .get("td.day:not(.disabled):not(.future):not(.past)")
          .contains(String(date));
    }
    getCalenderHour(data)
    {
        return cy.get(".hour:not(disabled)").contains(String(data));
    }
    getCalenderMinute(data)
    {
        return cy.get(".minute:not(disabled)").contains(String(data));
    }
    getDuration()
    {
        return cy.get('ul li.option')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getSchedule()
    {
        return cy.get('[ng-click="validForm && onSubmit()"]')
    }
}
export default Liveclass