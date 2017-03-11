var express = require('express');
var path = require('path');
var router = express.Router();
module.exports = router;

/* Routes go below here */

/* Here is an example route which includes a sub router */
router.get('/api/example*', function(req, res){
	var apiModule = require( path.join(__dirname, 'api', 'example') )(req, res);
	return apiModule;
});