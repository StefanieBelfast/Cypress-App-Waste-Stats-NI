describe('Users', () => {
    it('login', () => {
        cy.visit('http://localhost:8000/login')
        cy.contains('Local Admin').click()
        cy.contains('Local Admin').click()
        cy.contains('Users').click()
        })
    it('check items', () => {
        cy.get('.pageTitle').contains('UserTable')
        cy.get('.instructions').contains('List of accessible users')
        cy.get('.userSearch')//.should('placeholder')
        cy.get('.checkmark').should('have.length', 3)
        cy.get('.shadedRow').should('have.length', 3)
        cy.get('.rightSeparator').should('have.length', 3)
          .contains('Dat Aowner')
        cy.get('.rightSeparator').contains('seeder').click()
        cy.get('.rightSeparator').contains('Ad Min')
        cy.get('#resourcesButton').contains('Add new Resource')
        
        
    })
})