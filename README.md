# Cypress-Waste-Stats-IN
it is a test program which is running with Visual Studio Code and cypress
## need to install:
Github ->to push up

Visual Studio Code

**components:** nodejs, npm, (sudo npm install -g) @vue/cli

## Websites with informations:
[official cypress website](https://www.cypress.io/)

[example for tests](https://medium.com/geoman-blog/testing-maps-e2e-with-cypress-ba9e5d903b2b)

**answer/question for issue**

[stackoverflow](https://stackoverflow.com/)

[Github](https://github.com/)

**Youtube**

[using leaflet](https://www.youtube.com/results?search_query=using+leaflet+in+r+part+1+of+6+)

[handout to the video](http://seankross.com/slides/Developing_Data_Products/leaflet/leaflet.html#1)
## download/clone example from Github
[example](https://github.com/codeofsumit/leaflet.pm) codeofsumit/leaflet.pm

**look in**

**/leaflet.pm-develop package.json** ->to see the dependencies & commands

**/leaflet.pm-develop/cypress/support index.js** ->is a "before each" loop
>meaning is this loop is running before each testing sequence (you can change it for your own testing;for example, i did everywhere a commanding except the Website, see Github index.js)
## deleting the test files from the example
**/leaflet.pm-develop/cypress/integration testfile.js**

**create a new test file**
## run test
**npm run cypress** ->test runs on cypress(gui)

**npm run test** ->test runs on terminal

**in npm-debug.log -> you will find the errors**

**/leaflet.pm-develop/cypress/screenshots ->you will find screenshots from error**
# TEST
I'm testing features on this website [Waste Stats NI](http://52.209.112.20:8181/#/map)

I did the test site by site, you have at the left hand side 4 buttons(my 4 tests) and an extra test for the map
## DASHBOARD.js
**menu items** 
  -tests whether certain words can be found on the website

**count Symbols** 
  -counting the areas "[data-v-95f7d3de=""]", which should be a quantity 24

**Overall** 
  -clicking on "Overall", testing if the words contain in the "cardheader"

**Councils** 
  -clicking on "Councils", counting "cardheader" + word contain,counting "btn-primary" + word contain

**Landfill sites** 
  -clicking on "Landfill sites",counts "leaflet-tile", which should be 9

**Treatment sites** 
  -clicking on "Treatment sites", tests contain words

**Civic Sites** 
  -clicking on "Civic Sites",testing contain words, counts "card-header","card-body"
## STATISTICS.js
**menu item/count items** 
  -clicking on "Statistics",count "card","nv-pie","nv-bar", which should be 3,2,8, with certain words

**menu button/drop down** 
  -clicking on "Statistics",test contain words, clicking on button "Next Year","Previous Year", test certain year,"select:first" select first item on website, which contains words

**changes when "Electrical" removed'** 
  -click on "Next Year","Electrical" to test if there are changes ind the "%"

**existent graphics/text** 
  -testing contain words, count "statsGraphSize" which should be 2
## OPENDATA.js
**existing items** 
  -clicking on "Open Data", look to "h1" Headline 1 which contain words, count "table-strped"
## ABOUT.js
**existing text/items** 
  -clicking on "About", look to "h1" Headline 1 which contain words, count areas"[data-v-590f2b2b=""]", which should be 16
## MAPS.js
**maps moving 1** 
  -zooms in/out the map, tests several items(around the map) if they exists

**get marker text**
   -click on "leaflet-marker-icon",tests "leaflet-popup" if words contain

**correctly draws** 
  -tests if "leaflet-map-pane" exist and on it "leaflet-top","leaflet-bottom" is

**correctly sighn** 
  -tests if "leaflet-zoom-animated", "geleaflet-tile-loaded"(lines of the map),"leaflet-marker-shadow"(pointer, which is animated(zoom)),"leaflet-interactive"(lined areas),"leaflet-marker-icon"(pointer with text),"leaflet-control-attribution"(link bottom,right) exist

**maps moving 2**
>NICE TO KNOW; to get the right point, if you have item/circle/square etc. its coming up as a rectangle/square in the map(pixel you find in source code),they pointing (in my case)the right bottom corner out(because my pixel coordination 0x0 is in left/top) so you have to take the pixel minus the half of the box pixel, you will get the right coordination

**test the sign Councils.1** 
  -clicking on "Concils", test if "leaflet-marker-icon" exist, wait 5sec,click on this coordination, which contains words

**test the sign Councils.2** 
  -clicking on "Concils", wait 5sec,click on this coordination, which contains words

**test the sign Councils.3** 
  -clicking on "Concils", wait 5sec,click on this coordination, which contains words

**test the sign/Lanfill.1** 
  -clicking on "Landfill sites", wait 5sec, click on this coordination, which ist a "leaflet-popup-content" contains words

**test the sign/Lanfill.2** 
  -clicking on "Landfill sites", wait 5sec, click on this coordination, which ist a "leaflet-popup-content" contains words

**test the sign/Treatment** 
  -clicking on "Treatment sites", count "marker-cluster" should be 13,13,54, click on a number(cluster), which is the summary of certain points

**test the sign/Civic.1** 
  -clicking on "Civic Sites", click at cordis which should be a "leaflet-popup-content" with words

**test the sign/Civic.2** 
  -clicking on "Civic Sites", click at cordis which should be a "leaflet-popup-content" with words

**test the sign/Civic.3** 
  -clicking on "Civic Sites", click at cordis which should be a "leaflet-popup-content" with words

**counting marker/icons** 	
  -clicking on "Councils", count "leaflet-marker-icon" in "map" which should be 12, clicking on "Landfill sites", count "leaflet-marker-icon" in "map" which should be 33, clicking on "Treatment sites", count "leaflet-marker-icon" in "map" which should be 14, clicking on "Civic Sites", count "leaflet-marker-icon" in "map" which should be 100

**counting districts/areas** 
  -clicking on "Overall",wait 5sec, count "path.leaflet-interactive" in "map" which should be 11


