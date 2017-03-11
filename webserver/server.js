var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path    = require('path');
var router = require('./app/routes');

/*
	First we try to serve static files from the dist folder
	Next we check the route defined in app/routes
	Finally we will respond with 404
*/
app.use( '/', express.static( path.join(__dirname, 'dist')) );
app.use( '/', router );
app.use( function( req, res, next ) {
	res.status(404);
	if (req.accepts('html')) {
		return res.sendFile( path.join(__dirname, 'dist')+'/404.html' );
	}
	return res.send({ error: 'Not found' });
});

app.listen( port, function() {
  console.log( 'simple static server started on port', port );
});