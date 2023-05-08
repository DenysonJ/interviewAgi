const elements = require('./blogElements').ELEMENTS
const texts = require('./blogElements').TEXT
const baseUrl = Cypress.config('baseUrl')

class BlogPage {
  accessBlog () {
    cy.visit(baseUrl)
  }

  openSearch () {
    cy.get(elements.buttonOpenSearch).click()
  }

  typeSearch (text) {
    cy.get(elements.inputSearch).focus().type(text, { force: true })
  }

  searchSubmit () {
    cy.get(elements.buttonSearch).click()
  }

  typeAndSearch (text) {
    this.openSearch()
    this.typeSearch(text)
    this.searchSubmit()
  }

  validateSearch (text) {
    cy.url().should('be.equal', `${baseUrl}/?s=${text}`)
    cy.get(elements.titleSearch).invoke('text').then(title => {
      expect(title.trim()).to.be.equal(`${texts.titleSearch} ${text}`)
    })
  }

  validateNoResultMessage () {
    cy.get(elements.titleNoResults).invoke('text').then(title => {
      expect(title.trim()).to.be.equal(texts.titleNoResults)
    })
    cy.get(elements.spanNoResults).invoke('text').then(span => {
      expect(span.trim()).to.be.equal(texts.noResults)
    })
  }
}

export default new BlogPage()
