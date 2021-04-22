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
//import 'cypress-wait-until';
const CREDENTIALS = require("../fixtures/Credentials.json");

Cypress.Commands.add("Curriculum", ()=>{
    
  cy.get('.icon-curriculum.dash-img').click()
})

Cypress.Commands.add('waitForResourceToLoad', (fileName, type) => {
    const resourceCheckInterval = 40;
  
    return new Cypress.Promise(resolve => {
      const checkIfResourceHasBeenLoaded = () => {
        const resource = cy.state('window')
          .performance.getEntriesByType('resource')
          .filter(entry => !type || entry.initiatorType === type)
          .find(entry => entry.name.includes(fileName));
  
        if (resource) {
          resolve();
  
          return;
        }
  
        setTimeout(checkIfResourceHasBeenLoaded, resourceCheckInterval);
      };
  
      checkIfResourceHasBeenLoaded();
    });
  });




//SignIn Function
Cypress.Commands.add("Signin", (Username, Password) => {
  const SignIn = new Signin();

  cy.intercept({
    pathname: "/user/validateUser"
  }).as("ValidateUser")
  cy.intercept({
    pathname:"/userActivity/addPageActivity"
  }).as('IndexPage')

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
  cy.wait('@ValidateUser').then((req)=>{
    expect(req.response.statusCode).to.eq(200)
  })
  cy.wait('@IndexPage').then((req)=>{
    expect(req.response.statusCode).to.eq(200)
  })
  //SignIn.getSuccess().click()
});

//Logout Fx
Cypress.Commands.add("Logout", () => {
  /*
        Logs out after 2 secs 
    */
  cy.intercept({
    pathname: "/ErudexWebService/rest/user/userLogout"
  }).as('userLogout')
  cy.wait(2000);
  cy.get('[ng-click="logout()"]').click({multiple:true,force:true});
  cy.wait('@userLogout').then((req)=>[
    expect(req.response.statusCode).to.eq(200)
  ])
  cy.url().should('eq', CREDENTIALS.URL + "login/index.html")
  
});

Cypress.Commands.add('waitForResourceToLoad', (fileName, type) => {
  const resourceCheckInterval = 0;

  return new Cypress.Promise(resolve => {
    const checkIfResourceHasBeenLoaded = () => {
      const resource = cy.state('window')
        .performance.getEntriesByType('resource')
        .filter(entry => !type || entry.initiatorType === type)
        .find(entry => entry.name.includes(fileName));

      if (resource) {
        resolve();

        return;
      }

      setTimeout(checkIfResourceHasBeenLoaded, resourceCheckInterval);
    };

    checkIfResourceHasBeenLoaded();
  });
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
