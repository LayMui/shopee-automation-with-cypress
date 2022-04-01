export class HomePage {
    open() {
        cy.visit('https://shopee.sg/')
    }

    searchInput(searchText) {
        cy.get('.shopee-searchbar-input__input').type(searchText + '{enter}')

    }

    closePopUp() {
        cy.xpath(
          '//*[@id="main"]/div/div[3]/div/div/shopee-banner-popup-stateful//div/div/div/div/div/svg/path[1]'
        ).click()
    }
   
    searchResultHeader() {
        return cy.get('.shopee-search-result-header__text-highlight')
    }

   
}