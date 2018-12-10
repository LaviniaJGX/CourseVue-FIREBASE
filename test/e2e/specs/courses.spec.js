const baseURL = 'vuecoursestest.herokuapp.com'
const localUrl = 'http://localhost:3000'
let count = 40;
const course = {
  "courseTitle": `Computer Program${++count}`,
  "classHours": 40,
  "studentNumbers": 45,
  "studentCategory": "postgraduate",
  "teacherName": "Amandas",
  "teacherType": "admin"
}
describe('test delete', () => {
  beforeEach(() => {
    
    cy.request('POST', `${baseURL}/courses`, course)
    cy.request(`${baseURL}/courses`)
      .its('body')
      cy.visit("/");
      // Click Manage courses navbar link
      cy.get('.navbar-nav:nth-child(1)').
          find('.nav-item:nth-child(2)').click()
      
  })
 
  it("allows a course to be deleted", () => {
    cy.get('tbody').find('tr').should('have.length', 9)
    cy.get('tbody').find('tr:last-child').find('td:nth-child(9)').click()
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 8)
    cy.get('.swal2-confirm').contains('OK').click()
  })
})

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