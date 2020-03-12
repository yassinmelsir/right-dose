import 'bootstrap';
import "core-js/stable";
import "regenerator-runtime/runtime";

// PLUGINS
import Sortable from 'sortablejs';
import { initAlgoliaSearch } from "../plugins/init_algolia_search.js";

// ETC
import { updateTime } from "../paramedic/updateTime.js";
import { updatePatientInfo } from "../paramedic/updatePatientInfo.js";
import { displayDrugs } from "../paramedic/druglist.js";
import { activateRoute } from "../paramedic/activateRoute.js";
import { activateDrugs } from "../paramedic/activateDrugs.js";


// PLUGINS
initAlgoliaSearch();

// PARAMEDIC JAVASCRIPT
updateTime();

  // PATIENT INFO
updatePatientInfo();

  // DRUG QUEUE
displayDrugs();

  // ACTIVATE DRUGS
// activateDrugs();
activateRoute();



/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')

