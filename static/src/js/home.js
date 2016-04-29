// const Backbone = require('backbone');
//
// const homePage = (function () {
//   const HomeView = Backbone.View.extend({
//     initialize: function () {
//       console.log('calling home initialise');
//     },
//     test: function () {}
//
//   });
//
//   const init = function () {
//     new HomeView();
//   };
//
//   return {
//     init: init
//   };
// })();
//
// module.exports = homePage;

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <h1>Hello world!</h1>
    );
  }
});

module.exports = App;