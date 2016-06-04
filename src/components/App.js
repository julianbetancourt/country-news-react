var React = require('react');
var Link = require('react-router').Link;
var News = require('./News/News');


var App = React.createClass({
  render: function () {
    return (
        <News />
    );
  }
});

module.exports = App;
