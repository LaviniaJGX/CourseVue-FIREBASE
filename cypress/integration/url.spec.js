describe('test url', () => {
  before(() => {      
    cy.visit('/')
  })
  it('click nav menu', () => {
    cy.get('.fa-list').click()
    cy.url().should('include', '/courses')

    cy.get('.fa-money').click()
    cy.url().should('include', '/course')

    cy.get('.fa-globe').click()
    cy.url().should('include', '/map')

    cy.get('.fa-info').click()
    cy.url().should('include', '/about')

    cy.get('.fa-comment').click()
    cy.url()
    .should('include', '/contact')

    cy.get('.fa-sign-in').click()
    cy.url().should('include', '/login')
  })
})