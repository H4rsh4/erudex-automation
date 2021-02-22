class LessonPlan
{
    getCreateLesson()
    {
        return cy.get('#dropdownLessonPlan').find('[ui-sref="lessonPlanCreate"]')
    }
    getLanguage()
    {
        return cy.get('select').eq(1).select('0')
    }
    getClass()
    {
        return cy.get('select').eq(2).select('0')
    }
    getSubject()
    {
        return cy.get('select').eq(3).select('1')
    }
    getChapter()
    {
        return cy.get('select').eq(4).select('3')
    }
    getTopic()
    {
        return cy.get('ul li.option')
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
    getEditNotes()
    {
        return cy.get('.fa.fa-pencil')
    }
    getcancelDialog()
    {
        return cy.get('[ng-click="cancelDialog()"]')
    }
    getAddMultimeddia()
    {
        return cy.get('[ng-click="addMultiMediaLink()"]')
    }
    getcloseDialog()
    {
        return cy.get('[ng-click="closeThisDialog()"]')
    }
    getExternalLink()
    {
        return cy.get('[ng-click="addExternalLink()"]')
    }
    getLinkname()
    {
        return cy.get('[ng-model="linkName"]')
    }
    getURL()
    {
        return cy.get('[ng-model="externalLink"]')
    }
    getCreateLessonPlan()
    {
        return cy.get('[ng-click="savePlan()"]')
    }
    getViewLessonPlan()
    {
        return cy.get('#dropdownLessonPlan').find('[ui-sref="lessonPlanView"]')
    }
    getViewClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getViewsubject()
    {
        return cy.get('select').eq(2).select('1')
    }
    getViewchapter()
    {
        return cy.get('select').eq(3).select('2')
    }    
    getViewdate()
    {
        return cy.get('select').eq(4).select('1')
    }
    getEditLesson()
    {
        return cy.get('[ng-click="editPlan()"]')
    }
    getViewBack()
    {
        return cy.get('[ng-click="goBack()"]')
    }
}
export default LessonPlan