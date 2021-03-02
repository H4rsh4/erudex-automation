class Curriculam
{
    getGrades()
    {
        return cy.get('ul li.option').contains('IIT-Class 12')
    }
    getSubChemistry()
    {
        return cy.get('.subject-button.Chemistry ')
    }
    getSubMathematics()
    {
        return cy.get('.subject-button.Mathematics')
    }
    getSubPhysics()
    {
        return cy.get('.subject-button.Physics')
    }
    getarrowleft()
    {
        return cy.get('.fa.fa-arrow-circle-left')
    }
    getrefresh()
    {
        return cy.get('.fa.fa-refresh')
    }
    getLessonDocument()
    {
        return cy.get('li>div.resource-img-wrapper')
    }
    getPdfNext()
    {
        return cy.get('[ng-click="pdfViewer.goNextPage()"]')
    }
    getPdfZoomOut()
    {
        return cy.get('[ng-click="pdfViewer.zoomOut()"]')
    }
    getPdfZoomIn()
    {
        return cy.get('[ng-click="pdfViewer.zoomIn()"]')
    }
    getPdfFitpage()
    {
        return cy.get('[ng-click="pdfViewer.fitPage()"]')
    }
    getChapterContent()
    {
        return cy.get('[ng-if="show.relatedContent"] > a.ng-binding')
    }
    getchaptercontentclose()
    {
        return cy.get('i.fa-minus-circle')
    }
    getChapterFeature()
    {
        return cy.get('[ng-if="show.chapterFeatures"] > a.ng-binding')
    }
    getChapterNotes()
    {
        return cy.get('[ng-if="show.notes"] > a.ng-binding')
    }
    getNotesArea()
    {
        return cy.get('.text-center')
    }
    getNotesTyping()
    {
        return cy.get('#newNoteText')
    }
    getSaveNote()
    {
        return cy.get('[ng-click="saveNote()"]')
    }
    getNavigateback()
    {
        return cy.get('#navBackBtn')
    }
}
export default Curriculam