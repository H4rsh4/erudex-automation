class Grade
{
    getGradebook()
    {
        return cy.get('.grade-book')
    }
    getClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getSection()
    {
        return cy.get('select').eq(2).select('0')
    }
    getSubject()
    {
        return cy.get('select').eq(3).select('0')
    }
    getGradetype()
    {
        return cy.get('select').eq(4).select('1')
    }
    getChapter()
    {
        return cy.get('select').eq(5).select('3')
    }
    getAssesmentName()
    {
        return cy.get('[ng-model="name"]')
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
    getMarks()
    {
        return cy.get('select').eq(6).select('0')
    }
}
export default Grade