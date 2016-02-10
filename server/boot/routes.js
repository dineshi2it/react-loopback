var React = require('react');
var Router = require('react-router');
var reactRoutes = require('../../client/routes');

module.exports = function routes(app) {

  app.get('/*', function (req, res) {
    var router = Router.create({
      location: req.url,
      routes: reactRoutes
    });

    router.run(function (Handler) {
			
        var html = React.renderToString(
          <Handler bootstrap={{}} />
        );

        res.render('index', {
          markup: html,
          bootstrap: JSON.stringify()
        });

    });
  });
}

