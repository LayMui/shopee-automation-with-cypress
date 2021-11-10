/// <reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import {Actor, Task, Question, createCypressTask, createCypressQuestion} from 'cypress-screenplay';

const url = 'https://shopee.com'

const actor = new Actor()

const visitHomepage = createCypressTask((cy) => {
    cy.visit(url);
  });


const searchInput = createCypressTask((cy, searchText) => {
    cy.get('.shopee-popup__close-btn').click()
    cy.get('.shopee-searchbar-input__input').type(searchText + '{enter}')
  });

  const searchItems = createCypressQuestion((cy, item) => {
    cy.get('.shopee-search-result-header__text-highlight')
    .should('have.text', 'mask');
  })


Given('Alice is at shopee', () => {
   
    actor
    .perform(visitTestPage);

});


When('she search for the item', (dataTable) => {
    const item = dataTable.hashes()[0].item
    actor
    .perform(searchInput, item);
 
});

Then('she should able to get the result on that item', () => { 
    // actor.
    // ask(searchItems, (items) => {
    //     expect(items).to.contain('mask')
    // });
});





//     it('Should able to get the searched result', () => {
//         homePage.closePopUp();
//         homePage.searchInput('mask')
//         homePage.searchResultHeader().should('have.text', 'mask')
//     })
// })
   