/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe ('access the stage environment for test newsela platform', () => {


    it('login and homepage', () => {
        //for stage:
        cy.visit ('https://staging.newseladev.com/home/');
        cy.get ('.css-19kylkv').click(); 
        cy.get ('input[name="username"]').type('nara.silva.lite.teacher');
        cy.get ('input[name="password"]').type('newsela');
        cy.get ('.css-7xv69j-Ki').click(); 
                     
    })

    it('access and test assignments', () => {
      
      cy.visit ('https://staging.newseladev.com/home/');
      cy.get ('.css-19kylkv').click(); 
      cy.get ('input[name="username"]').type('nara.silva.lite.teacher');
      cy.get ('input[name="password"]').type('newsela');
      cy.get ('.css-7xv69j-Ki').click(); 
      cy.get ('header > nav > ul > li:nth-child(4) > a > div > div').click();
      cy.get ('#binderContents > div > div > div.css-jyzw4u > div > div.css-1sg2lsz > button:nth-child(3)').click();
                         
  })

    it('access and your content', () => {
      
      cy.visit ('https://staging.newseladev.com/home/');
      cy.get ('.css-19kylkv').click(); 
      cy.get ('input[name="username"]').type('nara.silva.lite.teacher');
      cy.get ('input[name="password"]').type('newsela');
      cy.get ('.css-7xv69j-Ki').click(); 
      cy.get ('#__next > div.css-3blrx4-GlobalLayout > header > nav > ul > li:nth-child(3) > button').click(); 
      cy.get ('#__next > div.css-3blrx4-GlobalLayout > header > nav > ul > li:nth-child(3) > div.css-y0dnnu > ul > li:nth-child(1) > div > a').click(); 

})

    it.only('access and browse', () => {
      
      cy.visit ('https://staging.newseladev.com/home/');
      cy.get ('.css-19kylkv').click(); 
      cy.get ('input[name="username"]').type('nara.silva.lite.teacher');
      cy.get ('input[name="password"]').type('newsela');
      cy.get ('.css-7xv69j-Ki').click(); 
      cy.get ('#__next > div.css-3blrx4-GlobalLayout > header > nav > ul > li:nth-child(2) > button').click();
      cy.get ('#__next > div.css-3blrx4-GlobalLayout > header > nav > ul > li:nth-child(2) > div.css-y0dnnu > div > ul:nth-child(4) > li > div > a').click();

      

      



})

})