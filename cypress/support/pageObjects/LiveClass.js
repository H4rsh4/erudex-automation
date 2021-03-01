class LiveClass{
    getLiveClassButton(){
        return cy.get(".dash-blk > .icon-live-classes")
    }
    getSelectClass(){
        return cy.get('.nice-select').first()
    }
    getClassList(){
        return cy.get("ul.list > li")
    }
    getSubject(sub){
        return cy.contains(sub)
    }
}
export default LiveClass;