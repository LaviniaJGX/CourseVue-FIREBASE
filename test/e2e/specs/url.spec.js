describe('test url', () => {
  before(() => {      
    cy.visit('/')
  })
  it('click nav menu', () => {
    cy.get('.fa-list').clcik()
    cy.url()
    .should('include', '/courses')
    })

    cy.get('.fa-money').clcik()
    cy.url()
    .should('include', '/course')
    })

    cy.get('.fa-globe').clcik()
    cy.url()
    .should('include', '/map')
    })

    cy.get('.fa-info').clcik()
    cy.url()
    .should('include', '/about')
    })

    cy.get('.fa-comment').clcik()
    cy.url()
    .should('include', '/contact')
    })

    cy.get('.fa-sign-in').clcik()
    cy.url()
    .should('include', '/login')
    })
})