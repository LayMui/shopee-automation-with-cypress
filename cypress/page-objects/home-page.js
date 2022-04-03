export class HomePage {
  open() {
    cy.visit('https://shopee.sg/')
  }

  searchInput(searchText) {
    cy.get('.shopee-searchbar-input__input').type(searchText + '{enter}', {force: true})
  }

  searchResultHeader() {
    return cy.get('.shopee-search-result-header')
  }
}
