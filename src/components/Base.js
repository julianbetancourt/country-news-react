var React = require('react');
var App = require('./App');
var Link = require('react-router').Link
var Base = React.createClass({
  render: function () {
    return (
      <div className="container">
        <nav>
          <div className="logo">
            <h1>Sports<span>News</span></h1>
            <span>Top Stories</span>
          </div>
          <ul>
            <li><Link to="/" activeClassName="active">News</Link></li>
            <li><Link to="/photos" activeClassName="active">Photos</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base;
