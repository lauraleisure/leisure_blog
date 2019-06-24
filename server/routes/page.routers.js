var express = require('express');
var router = express.Router();

var pageUsersRouter = require('./users/page.routers');
/* GET home page. */
router.use('/users', pageUsersRouter);



module.exports = router;

