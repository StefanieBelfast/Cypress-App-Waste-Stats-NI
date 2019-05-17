describe('opendata', () => {
//    it('Visits the app Waste NI', () => {
//        cy.visit('http://52.209.112.20:8181/#/map')
//        cy.contains('Waste Stats NI')
//    })
//if you use a index before, you will not need it 
 
    it('existing items', () => {
        cy.contains('Open Data').click()
        cy.get('h1').should('contain','Open Data')
        cy.get('.table-striped').should('have.length', 1)
    })
}) 
