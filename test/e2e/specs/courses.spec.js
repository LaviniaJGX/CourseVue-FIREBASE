const baseURL = 'http://endend.herokuapp.com'
describe('test edit', () => {
  beforeEach(() => {
    cy.request(`${baseURL}/courses`)
      .its('body')
      cy.visit("/");
      // Click Manage courses navbar link
      cy.get('.navbar-nav:nth-child(1)').
          find('.nav-item:nth-child(2)').click()
  })
 

  it("allows a course to be edited", () => {
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
    cy.url().should('include', '/edit')
  })
})