// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import Signin from "../support/pageObjects/Signin.js";

const CREDENTIALS = require("../fixtures/Credentials.json");

//SignIn Function
Cypress.Commands.add("Signin", (Username, Password) => {
  const SignIn = new Signin();
  cy.visit(CREDENTIALS.URL + "login/index.html?");
  SignIn.getUsername()
    .should("be.visible")
    .type(Username)
    .should("have.value", Username);
  SignIn.getPassword()
    .should("be.visible")
    .type(Password)
    .should("have.value", Password);
  SignIn.getSubmit().click();
});

//Logout Fx
Cypress.Commands.add("Logout", () => {
  /*
        Logs out after 2 secs 
    */
  cy.wait(2000);
  cy.get('[ng-click="logout()"]').click();
});

//Sourced from cypress.io blog
Cypress.Commands.add("goOnline", () => {
  cy.log("**go online**")
    .then(() => {
      // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
    })
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.disable",
      });
    });
});

Cypress.Commands.add("goOffline", () => {
  cy.log("**go offline**")
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.enable",
      });
    })
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
    });
});
