describe('Data Profiles', () => {

    it('login', () => {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
        cy.contains('Validation Reports').click()
        
        })
    it('check items/dropdown', () => {
        cy.get('.pageTitle').contains('Validation Reports')
        cy.get('.instructions').contains('Here is a list of generated reports for this account')
          .wait(500)
        cy.get('#dateFilter')//.click()
        cy.get('#userFilter')//.click()
        cy.get('#profileFilter')//.click()
        /// dropdown menu
        cy.get('.viewButton')//.click('id=[viewReport + 'report.name']')
        cy.get('id=[viewReport + "report.name"]').click()
        /// get the View Report
    })

    it('count items', () => {
        cy.get('.rightSeparator').should('have.length', 5)
        cy.get('.reportColumn').should('have.length', 20)
        cy.get('.col-sm-4').should('have.length', 15)
        cy.get('.shadedRow').should('have.length', 5)
        cy.get('.ragError').should('have.length',5)
        cy.get('.ragWarning').should('have.length',5)
        cy.get('.ragPass').should('have.length',5)
        cy.get('.ragNumber').should('have.length',15)
    })
})