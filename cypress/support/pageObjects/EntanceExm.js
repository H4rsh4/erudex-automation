class EntranceExam
{
    getNEETexam()
    {
        return cy.get('.icon-competitive').invoke('removeAttr','href').eq(0)
    }
    getEAMCETexam()
    {
        return cy.get('.ng-binding').contains('EAMCET')
    }
    getIITexam()
    {
        return cy.get('.ng-binding').contains('IIT - JEE MAINS')
    }
    getSubPhysics()
    {
        return cy.get('.subject-button.Physics')
    }
    getSubMathematics()
    {
        return cy.get('.subject-button.Mathematics')
    }
    getSubChemistry()
    {
        return cy.get('.subject-button.Chemistry')
    }
    getSubPhysics1()
    {
        return cy.get('.subject-button.Physics-12')
    }
    getSubMathematics1()
    {
        return cy.get('.subject-button.Mathematics.2a')
    }
    getSubChemistry1()
    {
        return cy.get('.subject-button.Chemistry-12')
    }
    getExamChapter()
    {
        return cy.get('select').eq(2).select('2502')
    }
    getExamChapter1()
    {
        return cy.get('select').eq(2).select('2406')
    }
    getExamChapter2()
    {
        return cy.get('select').eq(2).select('2532')
    }
    getExamConcepts()
    {
        return cy.get('[title="Component Of Vectors"]')
    }
    getExamConcepts1()
    {
        return cy.get('[title="Beats"]')
    }
    getNavigateback()
    {
        return cy.get('#navBackBtn')
    }
}
export default EntranceExam