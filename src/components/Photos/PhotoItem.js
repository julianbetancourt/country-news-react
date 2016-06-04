var React = require('react');

var PhotoItem = React.createClass({
  render: function () {
    return (
      <div className="photo">
        <a href={this.props.link}>
          <img src={this.props.link} alt={this.props.description} />
        </a>
      </div>
    );
  }
});

module.exports = PhotoItem;
