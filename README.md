# Cypress-Waste-Stats-IN
#it is a testprogramm which is running with Visual Studio Code and cypress

#need to install:   Github ->to push up
#                   Visual Studio Code
#       components: nodejs
#                   npm
#                   (sudo npm install -g) @vue/cli
# 
#   Websites with informations:
#       https://www.cypress.io/
#       https://medium.com/geoman-blog/testing-maps-e2e-with-cypress-ba9e5d903b2b 
#   answer/question for issue  
#       https://stackoverflow.com/
#       https://github.com/        
#   Youtube
#       https://www.youtube.com/results?search_query=using+leaflet+in+r+part+1+of+6+
#       http://seankross.com/slides/Developing_Data_Products/leaflet/leaflet.html#1
#
#   download/clone from Github 
#       codeofsumit/leaflet.pm
#       https://github.com/codeofsumit/leaflet.pm
#   look in
#       /leaflet.pm-develop package.json ->to see the dependencies & comands
#       /leaflet.pm-develop/cypress/support index.js ->inside is a "before each" loop; meaning is this loop is running before each testing sequence(you can change it for your own testing;for example, i did everywhere a comanding except the Website,see Github index.js)
#
#   deleting the test files from the example 
#       /leaflet.pm-develop/cypress/integration testfile.js
#   create a new test file
#
#   run test
#       npm run cypress ->test runs on cypress(gui)
#       npm run test    ->test runs on terminal 
#       in npm-debug.log -> you will find the errors
#       /leaflet.pm-develop/cypress/screencshots ->you will find screenshots from error
#
#INSIDE TEST       
#
#I'm testing features on this website http://52.209.112.20:8181/#/map
#I test site by site, you have at the left handside 4 buttons(my 4 tests) and an extra test for the map
#
#   DASHBOARD.js
#       menu items;     tests whether certain words can be found on the website
#       count Symbols;  counting the areas "[data-v-95f7d3de=""]", which should be a quantity 24
#       Overall;        clicking on "Overall", testing if the words contain in the "cardheader"
#       Councils;       clicking on "Councils", counting "cardheader" + word contain,counting "btn-primary" + word contain
#       Landfill sites;  clicking on "Landfill sites",counts "leaflet-tile", which should be 9
#       Treatment sites; clicking on "Treatment sites", tests contain words
#       Civic Sites;     clicking on "Civic Sites",testing contain words, counts "card-header","card-body"
#
#     STATISTICS.js
#       menu item/count items;              clicking on "Statistics",count "card","nv-pie","nv-bar", which should be 3,2,8, with certain words
#       menu button/drop down;              clicking on "Statistics",test contain words, clicking on button "Next Year","Previous Year", test certain year,"select:first" select first item on website, which contains words
#       changes when "Electrical" removed'; click on "Next Year","Electrical" to test if there are changes ind the "%"
#       existent graphics/text;             testing contain words, count "statsGraphSize" which should be 2
#
#     OPENDATA.js
#       existing items;          clicking on "Open Data", look to "h1" Headline 1 which contain words, count "table-strped"
#
#     ABOUT.js
#       existing text/items;     clicking on "About", look to "h1" Headline 1 which contain words, count areas"[data-v-590f2b2b=""]", which should be 16
#
#     MAPS.js
#       maps moving 1;          zooms in/out the map, tests serverals items(around the map) if they exists
#
#
#
#
#

       
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
