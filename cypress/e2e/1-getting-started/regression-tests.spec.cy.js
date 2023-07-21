/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe ('access the stage environment for test newsela platform', () => {


    it('scenarios for regression tests', () => {
        
  
        //for stage:
        cy.visit ('https://staging.newseladev.com/home/');
        cy.get ('.css-19kylkv').click(); 
        cy.get ('input[name="username"]').type('nara.silva.lite.teacher');
        cy.get ('input[name="password"]').type('newsela');
        cy.get ('.css-7xv69j-Ki').click(); 
        cy.get ('.css-614h0v').click(); //ta com erro
        cy.get ('.css-8a8o1p').click(); //ta com erro
        
        

        
        
    })


})