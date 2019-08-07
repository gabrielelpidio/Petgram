/* global describe, it, cy */

describe('Petgram', function () {
  it('para ver si funciona', function () {
    cy.visit('/')
  })

  it('Goes to a category and check for content', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Checks if we can go to home with navbar ', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('Checks that non registered users sees singin and login form when going to favs page', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
