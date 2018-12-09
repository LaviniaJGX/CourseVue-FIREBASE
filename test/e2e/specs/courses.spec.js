const baseURL = 'http://endend.herokuapp.com/'
describe('test the edit', () => {  
  beforeEach(() => {
    // Delete all courses in the API's datastore
    cy.request(`${baseURL}/courses`)
      .its('body')
      .then( (courses) => {
         courses.forEach( (element) => {
            cy.request('DELETE',
            `${baseURL}/courses/${element._id}`)
         });
      })
      // Populate API's datastore
      cy.fixture('courses')
        .then((courses) => {
            courses.forEach((course) => {
              cy.request('POST',
              `${baseURL}/courses`, course )
            })
      })
      cy.visit("/courses");
      // Click Manage courses navbar link
      cy.get('.navbar-nav:nth-child(1)').
          find('.nav-item:nth-child(2)').click()

 });
  it("allows a course to be deleted", () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 3rd course in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(9)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
    cy.get('.swal2-confirm').click()
  })
})
describe('test edit', () => {
  beforeEach(() => {
    cy.request('http://localhost:3000/courses')
      .its('body')
    cy.visit("/courses")
  })
 

  it("allows a course to be edited", () => {
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
    cy.url().should('include', '/edit')
  })
})