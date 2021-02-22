class Assignment
{
    getCreateAssignment()
    {
        return cy.get('#dropdownAssignment').find('li > [ui-sref="assignmentCreate"]')
    }
    getName()
    {
        return cy.get('#txtAssignmentName')
    }
    getClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getSubject()
    {
        return cy.get('select').eq(2).select('2')
    }
    getChapter()
    {
        return cy.get('select').eq(3).select('0')
    }
    getSubjectTopics()
    {
        return cy.get('ul li.option')
    }
    getMarks()
    {
        return cy.get('select').eq(6).select('0')
    }
    getDescription()
    {
        return cy.get('#cke_1_contents')
    }
    getCreateAssignPush()
    {
        return cy.get('#aCreateAndPush')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getStartCalender()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getEndCalender()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getDateandTime()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getDateandTime1()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getCalenderHour()
    {
        return cy.get('.hour:nth-child(18)')
    }
    getCalenderHour1()
    {
        return cy.get('.hour:nth-child(22)')
    }
    getCalenderMinute()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getCalenderMinute1()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getCancel()
    {
        return cy.get('[ng-click="cancelPush()"]')
    }
    getViewAssignment()
    {
        return cy.get('#dropdownAssignment').find('li > [ui-sref="assignmentView"]')
    }
    getSelectDate()
    {
        return cy.get('select').eq(4).select('0')
    }
    getCalender1()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getDate()
    {
        return cy.get('.datepicker .datepicker-days .table-condensed tr:nth-child(3) td')
    }
    getCalender2()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getPushedButton()
    {
        return cy.get('[ng-click="showPushedAssignments()"]')
    }
    getAssignmentPushedTable()
    {
        return cy.get('tr td:nth-child(4)')
    }
    getBack()
    {
        return cy.get('[ng-click="goBack()"]')
    }
}
export default Assignment