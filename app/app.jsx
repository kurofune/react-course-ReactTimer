const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const Timer = require('Timer');
const Countdown = require('Countdown');



const Main = require('Main');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');

jQuery(document).ready(($) => {
  $(document).foundation();
});

require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
