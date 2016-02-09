  /**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var ReactRouter = require('react-router')
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;

var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI')
var FluxCartApp = require('./components/FluxCartApp.react');
var DisplayList = require('./components/DisplayList.react');


// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <div>
        <Link to="/">Sample Page</Link>
        <Link to="/route">Route</Link>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        </div>
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={Index}>
    <Route path="route" handler={DisplayList}/>
    <DefaultRoute handler={FluxCartApp}/>
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('todoapp'));
});
