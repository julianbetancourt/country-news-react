var React = require('react');
var NewsItemArticle = require('./NewsItemArticle');

var NewsContent = React.createClass({
  render: function () {
    return (
      <div className="content">
        <div className="content-container">
          <div className="city">
            <span>{this.props.city}</span>
          </div>
          <NewsItemArticle subtitle={this.props.subtitle} />
        </div>
      </div>
    );
  }
});

module.exports = NewsContent;
