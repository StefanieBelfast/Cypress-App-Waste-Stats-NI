describe('about', () => {
//    it('Visits the app Waste NI', () => {
//        cy.visit('http://52.209.112.20:8181/#/map')
//        cy.contains('Waste Stats NI')
//    })
//if you use a index before, you will not need it 
 
    it('existing text/items', () => {
        cy.contains('About').click()
        cy.get('h1').should('contain','About Page')
        cy.get('[data-v-590f2b2b=""]').should('have.length', 16)
    })

    
}) 
