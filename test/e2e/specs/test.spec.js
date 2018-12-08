describe('测试', () => {   
  before(() => {      
    cy.visit('/')
  })
  it('测试是否包含指定文案', () => {
      cy.contains('Home')
  })
  it('获取指定元素', () => {
      cy.get('.fa-list').contains('Manage Courses')
  })
})