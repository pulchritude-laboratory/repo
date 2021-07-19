import { getGreeting } from '../support/app.po'

describe('web-admin', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    cy.login('my-email@something.com', 'myPassword')

    getGreeting().contains('Welcome to web-admin!')
    cy.get('button').contains('test')
  })

  it('should have a test button', () => {
    cy.get('button').contains('test')
  })

  it('should have a counter div', () => {
    cy.get('div#counter').contains('0')
  })

  it('should click on test button and counter div should be incremented', () => {
    cy.get('button').click()
    cy.get('div#counter').contains('1')
  })
})
