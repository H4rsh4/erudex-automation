class Signin {
    getUsername() 
    {
      return cy.get('.login-form > [type="text"]')
    }
    getPassword() 
    {
      return cy.get('.login-form [type="password"]')
    }
    getSignin() 
    {
      return cy.contains('Sign In')
    }
    getSuccess() 
    {
      return cy.get('.success')
    }
    getSubmit(){
      return cy.get('.login-form .login-button')
    }
  }
  export default Signin