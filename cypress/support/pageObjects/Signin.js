class Signin {
  getUsername() {
    return cy.get('.login-form [type="text"]');
  }
  getPassword() {
    return cy.get('.login-form [type="password"]');
  }
  getSubmit() {
    return cy.get('.login-form .login-button');
  }
  getPopup() {
    return cy.get("div.button.success.radius");
  }
}
export default Signin;
