var express = require('express');
var router = express.Router();

var apiUsersRouter = require('./users/api.routers');
/* GET home page. */
router.use('/users', apiUsersRouter);



module.exports = router;

