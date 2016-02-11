var React = require('react');
var Router = require('react-router');
var reactRoutes = require('../../client/routes');

module.exports = function routes(app) {

  app.get('/', function (req, res) {

     console.log("=======1=================",req.url);
    var router = Router.create({
      location: req.url,
      routes: reactRoutes
    });

    router.run(function (Handler) {
			var model = {"name":"XXXXXXXXXXXXXXXXXXXXXX"};

			
        var html = React.renderToString(
          <Handler bootstrap = {{model}} />
        );

        res.render('index', {
          markup: html,
          bootstrap: JSON.stringify(model)
        });

    });
  });

  app.get('/profile', function (req, res) {

    console.log(reactRoutes,"========================",req.url);
    var router = Router.create({
      location: req.url,
      routes: reactRoutes
    });

    router.run(function (Handler) {
      var model = {"name":"XXXXXXXXXXXXXXXXXXXXXX"};
      
      
        var html = React.renderToString(
          <Handler bootstrap={{model}} />
        );


        console.log("===================HTML===================");
        console.log(html);
        console.log("===================HTML===================");

        res.render('index', {
          markup: html,
          bootstrap: JSON.stringify(model)
        });

    });
  });
}

