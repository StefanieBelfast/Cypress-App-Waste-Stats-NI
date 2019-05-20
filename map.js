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
        //cy.get('.map').then($el => $el[0].getBoundingRect())
        cy.get('.map').then($el => $el[0].getBoundingClientRect())
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
        cy.get('.leaflet-marker-icon')
        //.children('img[src="static/councilicon2.png"]')

        cy.get('.leaflet-overlay-pane')
        .click(486,372,{force: true})
        .click(486,372,{force: true})
        .click(372,486,{force: true})
        .click(372,486,{force: true})
        //cy.get('.leaflet-popup-content').contains('Newry')

        cy.get('.leaflet-overlay-pane')
        .click(500,155,{force: true})
        .click(500,155,{force: true})
        //cy.get('.leaflet-popup')//.contains('Mid and')

        cy.get('.map')
        .click(251, 318, {force: true})
        .click(251, 318, {force: true})
        //cy.get('.leaflet-popup')//.contains('Fermanagh')
        //nr. are the koordination of the frame form the map
        //{force: true} is in because of their is a element covered
           
    })

    it('test the sign/Lanfill.1', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Landfill sites').click()
        cy.wait(500)
        cy.get('.map')
        .click(354,77)
        //.click(375,91,{force: true})
        cy.get('.leaflet-popup-content').contains('Landfill Tonnage:0')
    })

    it('test the sign/Lanfill.2', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Landfill sites').click()
        cy.wait(500)
        cy.get('.map')
        .click(126,302)
        .click(126,301)
       
        cy.get('.leaflet-popup').contains('Landfill Tonnage:16036')
    })

    it('test the sign/Treatment', () => {
        //issue, what will u do if u ve twice a number/idea indexnr.=ID=#
        cy.contains('Treatment sites').click()
        cy.get('.marker-cluster').should('have.length', 13)
        cy.get('.map')
        .contains(170).click({force: true})
        cy.get('.marker-cluster').should('have.length', 13)
        cy.get('.map')
        .contains(12).click({force: true}).click
        cy.get('.map')
        .get('.marker-cluster').should('have.length', 54)
        ///  .get('#511')//.click({force: true}).click
        /// try to catch the Item with Indexnr.
    })

    it('*test the sign/Civic', () => {
        cy.contains('Civic Sites').click()

        cy.get('.map')
        .click(479, 232,{force: true})
        //cy.get('.leaflet-popup-content')//.contains('Station Road Recycling Centre')
        cy.get('.map')
        //.click({force: true})
        //.click(120,345)
    })     

    it('*find a town by lat/lng', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Waste Stats NI')
        cy.get('.leaflet-overlay-pane')
        .click('c[lat=54.182071]','c[lng=-7.360636]',{force: true})
        .click('c[lat=-7.360636]','c[lng=54.182071]',{force: true})
        //cy.get('.map').getXcoordinate("-7.360636");
        //cy.get('.map').getYcoordinate("54.182071");
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
        cy.wait(500)
        cy.get('.map')
        .find('path.leaflet-interactive').should('have.length', 11)
    })    
})
