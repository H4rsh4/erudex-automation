class Signin {
  getUsername() {
    return cy.get('input[name="username"]');
  }
  getPassword() {
    return cy.get('input[name="password"]');
  }
  getSubmit() {
    return cy.get('[type="submit"]');
  }
  getPopup() {
    return cy.get("div.button.success.radius");
  }
}
export default Signin;
