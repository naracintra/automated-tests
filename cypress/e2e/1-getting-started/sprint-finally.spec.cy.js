/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe ('access the content settings for test newsela platform', () => {


    it('scenario for task ADMT-28', () => {       
        //for qa
        cy.visit ('https://admt-28.dev.newseladev.com/admin/content-settings/');
        cy.get ('.css-19kylkv').click();
        cy.get ('input[name="username"]').type('ela.district.leader');
        cy.get ('input[name="password"]').type('newsela');
        cy.get ('.css-1a83z3b').click();
        cy.visit ('https://admt-28.dev.newseladev.com/admin/content-settings/');
        cy.get ('.css-25ch14-D').click();
        cy.get ('.css-vlcvbm-D').click();
        cy.get ('.css-4vntj6-D').click();     
    })

    it.only('scenario for task ADMT-16', () => {    
      //for qa
      cy.visit ('https://admt-16-toast-msg.dev.newseladev.com/home/');
      cy.get ('.css-19kylkv').click();
      cy.get ('input[name="username"]').type('ela.district.leader');
      cy.get ('input[name="password"]').type('newsela');
      cy.get ('.css-1a83z3b').click();
      cy.visit ('https://admt-16-toast-msg.dev.newseladev.com/admin/content-settings/');
      cy.get ('#main-contents > div > div > div.css-1gt36t8 > div:nth-child(1) > div.css-1vsqvis > div > div > div > table > tbody > tr > td:nth-child(5) > div > div:nth-child(1) > button > a').click();
      cy.get ('#main-contents > div > div > div.css-1rah001 > form > div > div.css-1lu1io6 > div:nth-child(2) > button').click();

      

      
      


      


})
})