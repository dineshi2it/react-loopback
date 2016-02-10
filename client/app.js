var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./routes');

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});