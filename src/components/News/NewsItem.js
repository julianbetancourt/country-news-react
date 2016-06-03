var React = require('react');
var NewsItemPhoto = require('./NewsItemPhoto');
var NewsContent = require('./NewsContent');
var NewsItem = React.createClass({
  render: function () {
    return (
      <div className="news-item">
        <NewsItemPhoto title={this.props.title}/>
        <NewsContent city={this.props.city} subtitle={this.props.subtitle} />
      </div>
    );
  }
});

module.exports = NewsItem;
