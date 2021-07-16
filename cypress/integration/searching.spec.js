/// <reference types="cypress"/>

import { HomePage } from "../page-objects/home-page";

describe('When searching for mask', () => {

    const homePage = new HomePage()

    beforeEach(() => {
        homePage.open()
    })


    it('Should able to get the searched result', () => {
        homePage.closePopUp();
        homePage.searchInput('mask')
        homePage.searchResultHeader().should('have.text', 'mask')
cc
    })
})
   