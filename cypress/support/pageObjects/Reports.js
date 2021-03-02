class Reports
{
    getStudentReports()
    {
        return cy.get('#dropdownReports').find('[ui-sref="report.student.menu"]')
    }
    getClass()
    {
        return cy.get('select').eq(1).select('1')
    }
    getName()
    {
        return cy.get('[type="text"]')
    }
    getSection()
    {
        return cy.get('select').eq(2).select('0')
    }
    getPerformance()
    {
        return cy.get('[ng-click="viewStudentPerformance(student)"]')
    }
    getMonthPerformance()
    {
        return cy.get('select').eq(1).select('0')
    }
    getSubjects()
    {
        return cy.get('select').eq(2).select('1')
    }
    getChapters()
    {
        return cy.get('select').eq(3).select('5')
    }
    getPerformTopic()
    {
        return cy.get('ul li.option')
    }
    getActivityTab()
    {
        return cy.get('[heading="Activity"]')
    }
    
    getAssessTab()
    {
        return cy.get('[heading="Assessment"]')
    }
    getAssignTab()
    {
        return cy.get('[heading="Assignment"]')
    }
    getCollaborationTab()
    {
        return cy.get('[heading="Collaboration"]')
    }
    getUasgeReport()
    {
        return cy.get('[ng-click="viewStudentUsage(student)"]')
    }
    getMonthUsage()
    {
        return cy.get('select').eq(1).select('0')
    }
    getComparativeperf()
    {
        return cy.get('[ng-click="viewStudentComparativePerformance(student)"]')
    }
    getComparativesubjct()
    {
        return cy.get('select').eq(1).select('3')
    }
    getComparativeChapter()
    {
        return cy.get('select').eq(2).select('0')
    }
    getComparativetopics()
    {
        return cy.get('ul li.option')
    }
    getComparativegrade()
    {
        return cy.get('select').eq(4).select('1')
    }
    getCustomdates()
    {
        return cy.get('select').eq(5).select('1')
    }
    getClsReports()
    {
        return cy.get('#dropdownReports').find('[ui-sref="report.teacher.aggregate"]')
    }
    getClsreportGrade()
    {
        return cy.get('select').eq(1).select('1')
    }
    getClasSubjct()
    {
        return cy.get('select').eq(2).select('3')
    }
    getClasSection()
    {
        return cy.get('select').eq(3).select('0')
    }
}
export default Reports