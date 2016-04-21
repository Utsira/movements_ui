/* global window */
window.jQuery = window.$ = require('jquery');

const $ = window.$;
const home = require('./home.js');

require('bootstrap');

window.movements = {};
window.movements.initHome = home.init;

