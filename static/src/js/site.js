// /* global window */
// window.jQuery = window.$ = require('jquery');
//
// const $ = window.$;
// const home = require('./home.js');
//
// require('bootstrap');
//
// window.movements = {};
// window.movements.initHome = home.init;

/* global window */
window.jQuery = window.$ = require('jquery');
const $ = window.$;


var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./home.js');
ReactDOM.render(<App/>, document.body);