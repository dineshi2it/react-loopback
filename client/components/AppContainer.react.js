var React = require('react');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var API = require('../utils/API');

// Load Mock API Call
API.getUserList();

var AppContainer = React.createClass({
  render: function () {
    return (
      <div>
	    <div className="container">
      		<RouteHandler bootstrap={this.props.bootstrap} />
        </div>
      </div>
    );
  }
});

module.exports = AppContainer;