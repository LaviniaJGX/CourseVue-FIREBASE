describe('test the ui of home', () => {   
  before(() => {      
    cy.visit('/')
  })
  it('if the home contains specified element', () => {
    cy.get('.fa-home').contains('Home')
    cy.get('.fa-list').contains('Manage Courses')
    cy.get('.fa-money').contains('Course')
    cy.get('.fa-globe').contains('Map')
    cy.get('.fa-info').contains('About Us')
    cy.get('.fa-comment').contains('Contact Us')
    cy.get('.fa-sign-in').contains('Login')
    cy.get('.fa-sign-out').contains('Logout')

  })
  it('if the home contains specified context', () => {
      cy.contains('Homer for President !!')
      cy.contains('Out with Boring Prumt - Giving has never been so easy')
      cy.contains('Just click here to go to')
      cy.contains('the Course page')
      cy.contains('This is the homepage of your MEVN Web app')
      cy.contains('Like this Sample Vue App? You can find the Step-by-Step guide on how to build it.here')
      cy.contains('Footer title')
      cy.contains('Courses Web App')

  })
})