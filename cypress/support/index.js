// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Cypress Autocompletion
/// <reference types="cypress" />

const goOnline = () => {
    // disable offline mode, otherwise we will break our tests :)
    cy.log('**go online**')
    .then(() => {
      // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.emulateNetworkConditions',
          params: {
            offline: false,
            latency: -1,
            downloadThroughput: -1,
            uploadThroughput: -1,
          },
        })
    })
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.disable',
        })
    })
  }

const goOffline = () => {
cy.log('**go offline**')
.then(() => {
    return Cypress.automation('remote:debugger:protocol',
    {
        command: 'Network.enable',
    })
})
.then(() => {
    return Cypress.automation('remote:debugger:protocol',
    {
        command: 'Network.emulateNetworkConditions',
        params: {
        offline: true,
        latency: -1,
        downloadThroughput: -1,
        uploadThroughput: -1,
        },
    })
})
}

const assertOnline = () => {
    return cy.wrap(window).its('navigator.onLine').should('be.true')
  }
  
const assertOffline = () => {
return cy.wrap(window).its('navigator.onLine').should('be.false')
}