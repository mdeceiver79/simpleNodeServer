/*
	Example api
		This acts as a subrouter for express so any request with url pattern matching "api/example*" will be processed here.
*/

var express = require('express');
var router = express.Router();

/* Routes are determined here, if the url matches a route it will not continue to test the subsequent routes. hint for l33t pros: move handler function into a separate controller file. */
router.get('/api/example/list', function( req, res ) {
	res.status(200).json([ 'item1', 'item2' ]);
});
router.get('/api/example/item/:item_id', function( req, res ) {
	res.status(200).json({ msg : 'item'+req.params.item_id });
});

/* now we have a catch all requests which didn't match the above routes */
router.all('*', function( req, res ) {
	res.status(400).json({ error : 'bad request' });
});

module.exports = router;