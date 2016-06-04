var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Base = require('./components/Base');
var App = require('./components/App');
var Photos = require('./components/Photos/Photos');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={App} />
      <Route path="/photos" component={Photos} />
    </Route>


  </Router>
), document.getElementById('app'));
