/// <reference types="cypress" />

describe('visit site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/coin/bitcoin')
    cy.intercept('GET', '*').as('getAll')
    cy.wait('@getAll')
  })

  it('Theme Switcher', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('.MuiToolbar-root button.MuiButtonBase-root svg').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(33, 33, 33)')
    cy.get('.MuiToolbar-root button.MuiButtonBase-root svg').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('Homepage link exist', () => {
    cy.get('[aria-label="homepage"]')
  })

  it('Canvas exist', () => {
    cy.get('#chart canvas')
  })

})
