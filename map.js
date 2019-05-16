describe('maps moving 1', () => {
    it('Zooming in the App', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Waste Stats NI')

        cy.get('.leaflet-control-zoom-out').click();
        cy.get('.leaflet-control-zoom-out').click();
        cy.get('.leaflet-control-zoom-out').click();

        cy.get('.leaflet-control-zoom-in').click();
        cy.get('.leaflet-control-zoom-in').click();
        cy.get('.leaflet-control-zoom-in').click();

        

        cy.get('.vue2leaflet-map')
        cy.get('.leaflet-container')
        cy.get('.leaflet-touch')
        cy.get('.leaflet-fade-anim')
        cy.get('.leaflet-grab')
        cy.get('.leaflet-touch-drag')
        //cy.get('.claim > .btn-med-secondary').then($el => $el[0].getBoundingRect())
        //cy.get('.claim > .btn-med-secondary').then($el => $el[0].getBoundingClientRect())
        //testing


    })

    it('get marker text', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Waste Stats NI')

        cy.get('.leaflet-marker-icon').click()
        cy.get('.leaflet-popup').contains('Center of Northern Ireland')    
    })
    
    it('correctly draws', () => {
        cy.get('.leaflet-map-pane')
        cy.get('.leaflet-top')
        cy.get('.leaflet-bottom')
        //get the top/left Button +/-
    })


    it('correctly sighn', () => {
            
        cy.get('.leaflet-zoom-animated')
        cy.get('.leaflet-tile-loaded')
            //lines of the map
        cy.get('.leaflet-marker-shadow')
            // pointer, which is animated(zoom)
        cy.get('.leaflet-interactive')
            // umrandeten Gebiete
        cy.get('.leaflet-marker-icon')
            // pointer , der pointed with text
        cy.get('.leaflet-control-attribution')
            //link bottom, right
    })

})
describe('maps moving 2', () => {
    const mapSelector = '.map';
    //.map = the same as 'class=map'

    it('*test the sign Councils', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Councils').click()

        cy.get('.map')
        .click(617,372,{force: true})
        .click(617,372)

        cy.get('.map')
        .click(452,138,{force: true})
        .click(452,138,{force: true})
        //cy.get('.leaflet-popup').contains('Mid and')

        cy.get('.map')
        .click(209, 318, {force: true})
        .click(209, 318)
        //nr. are the koordination of the frame form the map
        //{force: true} is in because of their is a element covered
        //cy.get('.leaflet-popup').contains('Fermanagh')   
    })

    it('*test the sign/Lanfill', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Landfill sites').click()

        cy.get('.map')
        .click(300,44,{force: true})
        .click(300,44)
        //cy.get('.leaflet-popup').contains('Landfill Tonnage:0')

        cy.get('.map')
        .click(120,345,{force: true})
        .click(120,345)
        //cy.get('.leaflet-popup').contains('Landfill Tonnage:16036')
    })

    it('*test the sign/Treatment', () => {
        //issue, what will u do if u ve twice a number/idea indexnr.=ID=#
        cy.contains('Treatment sites').click()

        cy.get('.map')
        .contains(170).click({force: true})
        cy.get('.map')
        .contains(12).click({force: true}).click
        cy.get('.map')
        ///.get('.marker-cluster')
        ///  .get('#511')//.click({force: true}).click
        /// try to catch the Item with Indexnr.
    })

    it('*test the sign/Civic', () => {
        cy.contains('Civic Sites').click()

        cy.get('.map')
        .click(554, 137,{force: true})
        cy.get('.map')
        //.click({force: true})
        //.click(120,345)
    })     

    it('*find a town by lat/lng', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Waste Stats NI')
        cy.get('.map')
        //.click('54.182071,-7.360636')
    })

    it('counting marker/icons', () => {
        cy.contains('Councils').click()
        cy.get('.map')
        .find('.leaflet-marker-icon').should('have.length', 12)

        cy.contains('Landfill sites').click()
        cy.get('.map')
        .find('.leaflet-marker-icon').should('have.length', 33)

        cy.contains('Treatment sites').click()
        cy.get('.map')
        .find('.leaflet-marker-icon').should('have.length', 14)

        cy.contains('Civic Sites').click()
        cy.get('.map')
        .find('.leaflet-marker-icon').should('have.length', 100)
    })

    it('counting districts/areas', () => {
        cy.contains('Overall').click()
        cy.get('.map')
        .find('path.leaflet-interactive').should('have.length', 11)
    })    
})