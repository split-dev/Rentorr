// Polyfills if needed
// require('intersection-observer');

// import external dependencies
import './util/polyfills'
import 'jquery';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import Detection from './util/Detection';
import browsing from './routes/browsing';
import home from './routes/home';
import apartment from './routes/apartment-details';
import landlordProfile from './routes/landlord-profile';

window._detector = new Detection({
  detect: ['ie11'],
});
window._detector.init();

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  'browsing': browsing,
  'home': home,
  'apartment': apartment,
  'landlordprofilejs': landlordProfile,
});

// // Load Events
jQuery(document).ready(() => routes.loadEvents());
