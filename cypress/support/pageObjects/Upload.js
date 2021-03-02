class Upload
{
    getUploadContent()
    {
        return cy.get('.upload-content')
    }
    getContentName()
    {
        return cy.get('[placeholder="Enter Content Name"]')
    }
    getClass()
    {
        return cy.get('select').eq(1).select('1')
    }
    getSubject()
    {
        return cy.get('select').eq(2).select('0')
    }
    getChapter()
    {
        return cy.get('select').eq(3).select('1')
    }
    getTopics()
    {
        return cy.get('ul li.option')
    }
    getDescription()
    {
        return cy.get('[placeholder="Enter Description(Optional)"]')
    }
    getConcept()
    {
        return cy.get('[placeholder="Enter Concept(Optional)"]')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
}
export default Upload