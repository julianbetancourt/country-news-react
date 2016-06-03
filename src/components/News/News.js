var React = require('react');
var NewsItem = require('./NewsItem');

var News = React.createClass({
  render: function () {

    return (
      <section className="news">
        <NewsItem title="Basketball" subtitle="GSW vs CAV" city="SF, California"/>
        <NewsItem title="Soccer" subtitle="Copa America" city="United States"/>
        <NewsItem title="Tennis" subtitle="Roland Garros" city="Paris, Fr"/>
      </section>
    );
  }
});



module.exports = News;
