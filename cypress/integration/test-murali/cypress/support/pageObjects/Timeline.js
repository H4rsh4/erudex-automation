class Timeline
{
    getCurriculam()
    {
        return cy.get('.icon-curriculum.dash-img')
    }
    getTimeline()
    {
        return cy.get('.timeline')
    }
    getLastweek()
    {
        return cy.get('[heading="Last Week"]')
    }
    getThisMonth()
    {
        return cy.get('[heading="This Month"]')
    }
    getnext()
    {
        return cy.get('.fc-next-button')
    }
    getprevious()
    {
        return cy.get('.fc-prev-button')
    }
    getThisweek()
    {
        return cy.get('[heading="This Week"]')
    }
}
export default Timeline