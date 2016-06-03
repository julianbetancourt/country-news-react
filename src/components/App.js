var React = require('react');
var News = require('./News/News');

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <News />
      </div>
    );
  }
});

module.exports = App;
