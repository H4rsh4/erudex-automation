class orgAdmin {
  //https://github.com/cypress-io/cypress/issues/136#issuecomment-619240781
  getReportsBody(locator) {
    return cy
      .get("#reportsFrame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  }
  getReport(ReportName) {
    this.getReportsBody()
      .contains(ReportName)
      .parent()
      .then(($obj) => {
        $obj.find("button.MuiButtonBase-root").click();
      });
  }
  getGraph(){
    return cy.get('rect')
  }
}
export default orgAdmin;
