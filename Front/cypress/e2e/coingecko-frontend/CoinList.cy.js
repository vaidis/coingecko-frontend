/// <reference types="cypress" />

describe('visit site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
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

  it('Coins Table - Length 25', () => {
    cy.get('.coin-list table tbody tr').should('have.length', 25)
  })

  it('Coins Table - Desktop 6 columns', () => {
    cy.viewport(1920, 1080)
    cy.get('.coin-list table thead tr th')
      .then($ths => {
        return [...$ths].filter(th => Cypress.$(th).css('display').includes('table-cell'))
      })
      .then(items => {
        const length = items.length
        expect(length).eq(6)
      })
  })

  it('Coins Table - Tablet 5 columns', () => {
    cy.viewport(800, 600)
    cy.get('.coin-list table thead tr th')
      .then($ths => {
        return [...$ths].filter(th => Cypress.$(th).css('display').includes('table-cell'))
      })
      .then(items => {
        const length = items.length
        expect(length).eq(5)
      })
  })

  it('Coins Table - Mobile 3 columns', () => {
    cy.viewport(320, 600)
    cy.get('.coin-list table thead tr th')
      .then($ths => {
        return [...$ths].filter(th => Cypress.$(th).css('display').includes('table-cell'))
      })
      .then(items => {
        const length = items.length
        expect(length).eq(3)
      })
  })

  it('Pager - Exist', () => {
    cy.get('[aria-label="pager"]').find('button').should('have.length', 4)
    cy.get('[aria-label="pager"]').find('button').eq(0).should('be.disabled')
    cy.get('[aria-label="pager"]').find('button').eq(1).should('be.disabled')
    cy.get('[aria-label="pager"]').find('button').eq(2).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(3).should('be.enabled')
  })

  it('Pager - First Page Buttons', () => {
    cy.get('[aria-label="pager"]').find('button').eq(0).should('be.disabled')
    cy.get('[aria-label="pager"]').find('button').eq(1).should('be.disabled')
    cy.get('[aria-label="pager"]').find('button').eq(2).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(3).should('be.enabled')
  })

  it('Pager - Second Page Buttons', () => {
    cy.get('[aria-label="pager"]').find('button').eq(2).click()
    cy.get('[aria-label="pager"]').find('button').eq(0).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(1).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(2).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(3).should('be.enabled')
  })

  it('Pager - Last Page Buttons', () => {
    cy.get('[aria-label="pager"]').find('button').eq(3).click()
    cy.get('[aria-label="pager"]').find('button').eq(0).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(1).should('be.enabled')
    cy.get('[aria-label="pager"]').find('button').eq(2).should('be.disabled')
    cy.get('[aria-label="pager"]').find('button').eq(3).should('be.disabled')
  })

  it('Link to coin details page', () => {
    cy.get('.coin-list table tbody tr a').eq(0).click()
    cy.url().should('match', /\/coin\/bitcoin$/)
  })

})
