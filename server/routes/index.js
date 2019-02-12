var express = require('express');
var router = express.Router();

var usersRouter = require('./users/pageUserRouter');
var homeRouter = require('./home/homeRouter');
/* GET home page. */
router.use('/users', usersRouter);
router.use('/', homeRouter);


module.exports = router;

