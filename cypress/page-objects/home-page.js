export class HomePage {
    static searchInput(arg0) {
        throw new Error('Method not implemented.')
    }
    static closePopUp() {
        throw new Error('Method not implemented.')
    }

    open() {
        cy.visit('https://shopee.sg/')
    }

    searchInput(searchText) {
        cy.get('.shopee-searchbar-input__input').type(searchText + '{enter}')
    }

    closePopUp() {
        cy.get('.shopee-popup__close-btn').click()
    }
   
    searchResultHeader() {
        return cy.get('.shopee-search-result-header__text-highlight')
    }

   
}