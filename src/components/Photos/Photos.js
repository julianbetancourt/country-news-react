var React = require('react');
var PhotoItem = require('./PhotoItem');

var Photos = React.createClass({
  render: function () {
    var images = [
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7016a185ad1209e945e90452d0df01c9',
      'https://images.unsplash.com/photo-1429407614269-4bfb6a2305ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=130e1acccda7f34ec254e438ea5b815a',
      'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=bd85d7b034f17939d21da8094ffd347e',
      'https://images.unsplash.com/photo-1414496652111-af2e59db70d4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=eee314ed2149a537a5dafac815ddfc4f',
      'https://images.unsplash.com/photo-1450121982620-84a745035fa8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=669e00efd8ce10a720fbe99b379278c9'

    ]
    return (
      <section className="photos">
        <PhotoItem link={images[0]} description="Playing Football" />
        <PhotoItem link={images[1]} description="Baseball" />
        <PhotoItem link={images[2]} description="Football Shoes" />
        <PhotoItem link={images[3]} description="Surfing" />
        <PhotoItem link={images[4]} description="American Football" />
      </section>
    );
  }
});



module.exports = Photos;
