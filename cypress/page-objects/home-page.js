export class HomePage {
  open() {
    cy.visit('https://shopee.sg/')
  }

  searchInput(searchText) {
    cy.get('.shopee-searchbar-input__input').type(searchText + '{enter}', {force: true})
  }

  searchResultHeader() {
    return cy.get('.shopee-header-section__header__title')
  }
}
