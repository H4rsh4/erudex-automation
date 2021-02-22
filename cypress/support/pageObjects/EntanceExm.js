class EntranceExam
{
    getEntranceExam()
    {
        return cy.get('a.ng-scope > .icon-competitive')
    }
    getSubPhysics()
    {
        return cy.get('.subject-button.Physics')
    }
    getSubMathematics()
    {
        return cy.get('.subject-button.Mathematics')
    }
    getExamChapter()
    {
        return cy.get('select').eq(2).select('2385')
    }
    getExamConcepts()
    {
        return cy.get('[title="Types Of Matrices"]')
    }
    getNavigateback()
    {
        return cy.get('#navBackBtn')
    }
}
export default EntranceExam