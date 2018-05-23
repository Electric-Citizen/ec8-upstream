
ABOUT OC PATTERNS THEME
------------

Open Citizen Patterns (OC Patterns) is an Atomic design based Pattern Lab theme by Electric Citizen, http://www.electriccitizen.com. 

For Drupal 8, OC Patterns uses Emulsify by Four Kitchens as its base them. The Emulsify Gulp npm package is a tendency of the OC Patterns theme.

OC Patterns is a default theme that comes along with each Drupal 8 site by Electric Citizen. Base elements such as content types, menus and paragraph widgets are pre-themed but can be customized on a per site basis as needed based on the site design. Twig macro presets are use to switch between pre-defined theming sets for certain site elements (fixed vs non-fixed footer, main menu alignment, etc).

Since OC Patterns is a Pattern Lab theme, the theme start command will spin up a local Pattern lab instance in Google Chrome. Detailed theme documentation can be found in that Pattern Lab instance.


GETTING STARTED
--------------------

Working with OC Patterns requires a few things: 
(a) working knowledge of Sass, Twig, Jquery
(c) use of the command line (e.g. Terminal) and a good IDE (e.g. Sublime Text)

To get started:
(a) get a local site instance spun up following the virtual machine on boarding section of the site repo.
(b) Make sure you have npm installed globally and that you are using version 5.5.1 or later. You can check this by running: npm -v in any command line window.
(c) cd into the folder for oc_patterns in the command line
(d) run: npm install

Working: 
(a) cd into the oc_patterns folder in the command line
(b) run: npm start

-- This will trigger many things: SVG Icons in oc_patterns/images/icons/src will be compiled into a svg sprite and assigned mixins and css selectors, Scss files will be linted and compiled, js files will be listed and compiled, a local Pattern Lab instance will be opened in Google Chrome.

Other notes:
-- theme tasks are all run by the npm start script defined in package.json. New tasks can be added to that script and existing tasks defined in that script can be customized in local.gulpe-config.js.

