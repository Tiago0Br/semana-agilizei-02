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
Cypress.Commands.add("backgroundLogin", () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0urKCf2RrVcx0f%2BWRcDzZwHEhk0SSeYI6QnsISAEt8i64NtuN%2F6Qdto8%2FHHbEB3iQoThynpe08A8P%2FslGXprfQQSzmEuW7SfRskkrqvvRF6YllWF2Pbdn3zCfigk2CJa3DksNfftxNOQMCNOPqRDNvUCwu%2FkF7z83EyxbZd6qrW%2BT0LQ8HgoVq7n21EB8oUhlu6sYv2sn0OnTXRNWVjkxPruEcy01Ghc5veIjGwcxbULJKMLp8u8VLrWDqIuLorBA5IsGw2ylULRFE%2BrdaLH6MnbdvnCorjLvx26S%2FIwrULWVzGmMG9pTNv%2BO4eSqSB7TPfrpk9UfPKtkHXRhQHNJXhQF2PoiGmlnOLWeqMZSFufrNt%2FYfcYxzovSGQ2dHYhl6JyghVIKsc0uPxmdswh4EssLALd%2FledZcFQFV5jQG3BCipZEzCvVgvuhtg1Q9iqDg%3D%3D000349'
    )
})