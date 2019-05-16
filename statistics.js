describe('statistics', () => {
    it('Visit the app Waste NI', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Waste Stats NI')
    }) 

    it('menu item/count items', () => {
        cy.contains('Statistics').click()
        cy.get('.card').should('have.length', 3)
          .contains('Northern Ireland Civic Site Total')
        cy.get('.nv-pie').should('have.length', 2)
          .contains('Tonnage')
        cy.get('.nv-bar').should('have.length', 8)
    })

    
    it('menu button/drop down', () => {
        cy.contains('Northern Ireland Civic Site Total')
        cy.contains('Next Year').click()
        //should !!cy.contains('2016/17')
        cy.contains('2015/16')
        cy.contains('Previous Year').click()
        //should !!cy.contains('2015/16')
        cy.contains('2016/17')
        // are there changings when click on "next year"/ "previous year"
        cy.get('select:first').should('contain','Belfast')
        //select the dropdown,should contain <text>    
       })

    it('changes when "Electrical" removed', () => {
        cy.contains('Northern Ireland Civic Site Total')
        cy.contains('Next Year').click()
        cy.contains('42%')
        cy.contains('23%')
        cy.contains('Electrical').click()
        cy.contains('47%')
        cy.contains('26%')
        //testing the changes when "Electrical" removed
        })

    it('existent graphics/text, ', () => {
        cy.contains('Landfill')
        cy.contains('Recycling')
        cy.get('.statsGraphSize').should('have.length', 2)
        })

}) 