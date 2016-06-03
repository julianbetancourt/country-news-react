var React = require('react');

var NewsItemPhoto = React.createClass({
  render: function () {
    var image = 'https://images.unsplash.com/photo-1463073003471-a88643b4ebaf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=57c565b4b5489280e28e6b93c9f54398';
    var backgroundImage = {
      backgroundImage: 'linear-gradient(rgba(20, 116, 215, 0.53), rgba(20, 116, 215, 0.53)), url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div className="photo" style={backgroundImage}>
        {this.props.title}
      </div>
    );
  }
});

module.exports = NewsItemPhoto;
