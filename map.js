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
/// TO GET THE RIGHT POINT
/// take the pixel minus the half of the box pixel, so you will get the right cordinations

    it('test the sign Councils.1', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Councils').click()

        cy.get('.map')
        cy.get('.leaflet-marker-icon')
        //.children('img[src="static/councilicon2.png"]')
        cy.wait(500)
        cy.get('.map')
        .click(378,357)
        .click(378,357)
        cy.get('.leaflet-popup-content').contains('Newry')
    })

    it('test the sign Councils.2', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Councils').click()
        cy.wait(500)
        cy.get('.map')
        .click(383,141)
        .click(383,141)
        cy.get('.leaflet-popup').contains('Mid and')
    })

    it('test the sign Councils.3', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Councils').click()
        cy.wait(500)
        cy.get('.map')
        .click(134, 304)
        .click(134, 304)
        cy.get('.leaflet-popup').contains('Fermanagh')
        //nr. are the koordination of the frame form the map
        //{force: true} is in because of their is a element covered
           
    })

    it('test the sign/Lanfill.1', () => {
        cy.visit('http://52.209.112.20:8181/#/map')
        cy.contains('Landfill sites').click()
        cy.wait(500)
        cy.get('.map')
        .click(354,77)
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
    })

    it('test the sign/Civic.1', () => {
        cy.contains('Civic Sites').click()

        cy.get('.map')
        .click(54, 287)
        cy.get('.leaflet-popup-content').contains('Garrison Civic Amenity Site')
    })     

    it('test the sign/Civic.2', () => {
        cy.contains('Civic Sites').click()

        cy.get('.map')
        .click(288,47)
        cy.get('.leaflet-popup-content').contains('Castlerock Civic Amenity Site')
    })   

    it('test the sign/Civic.3', () => {
        cy.contains('Civic Sites').click()

        cy.get('.map')
        .click(240, 228)
        cy.get('.leaflet-popup-content').contains('Civic Site Name:Carrickmore Household Recycling Centre')
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
