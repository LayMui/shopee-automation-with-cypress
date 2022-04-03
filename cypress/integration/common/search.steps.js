
/// <reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from "../../page-objects/home-page";

const url = 'https://shopee.sg'

const homePage = new HomePage()

Before(() => {
    homePage.open()
  });
  

Given('Alice is at shopee', () => {
    cy.visit(url)
});


When('she search for the item', (dataTable) => {
    const item = dataTable.hashes()[0].item
    homePage.searchInput(item)
});

Then('she should able to get the result on that item', () => { 
    homePage.searchResultHeader().should('have.text', 'Search result for \'mask\'');
});
