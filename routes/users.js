var express = require('express');
var router = express.Router();
var searchUser = require('../public/views/search.html');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search', searchUser);

module.exports = router;
