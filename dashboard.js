describe('dashboard', () => {
//    it('dash', () => {
//        cy.request('http://52.209.112.20:8181/#/map')
//      cy.contains('Waste Stats NI')
//    })
//if you use a index before, you will not need it 

    it('menu items', () => {
        cy.contains('Dashboard')
        cy.contains('Councils')
        cy.contains('Landfill sites')
        cy.contains('Treatment sites')
        cy.contains('Civic Sites')
    })

    it('count Symbols ', () => {
        cy.get('[data-v-95f7d3de=""]').should('have.length', 24)
    }) 
    

    it('Overall', () => {
        cy.contains('Overall').click()
        cy.get('.cardHeader').contains('Landfill')
        cy.get('.cardHeader').contains('Recycling')
        cy.get('.cardHeader').contains('Food')    
    }) 

    it('Councils', () => {
        cy.contains('Councils').click()
        cy.get('.cardHeader').should('have.length', 2)
          .contains('Household Statistics')
        cy.get('.cardHeader').contains('Council Statistics')
        cy.get('.btn-primary').should('have.length', 2)
          .contains('Previous Quarter')
        cy.get('.btn-primary').contains('Next Quarter')    
    }) 

    it('Landfill sites', () => {
        cy.contains('Landfill sites').click()
        cy.get('.leaflet-tile').should('have.length',9)
    }) 

    it('Treatment sites', () => {
        cy.contains('Treatment sites').click()
        cy.contains('Code')
        cy.contains('Description')
        cy.contains('Licence Holder:')
        cy.contains('Licence ID:')
        cy.contains('Licence Status:')
    }) 

    it('Civic Sites',()=>{
        cy.contains('Civic Sites').click()
        cy.contains('Site Name:')
        cy.contains('Finacial Year:')
        cy.contains('Previous Year')
        cy.contains('Next Year')
        cy.get('.card-header').should('have.length',1)
        cy.get('.card-body').should('have.length',1)
    })

          
}) 

