var express = require('express');
var router = express.Router();

var apiRouter = require('./api.routers');
var homeRouter = require('./home/page.routers');
var pageRouter = require('./page.routers');
/* GET home page. */
/*页面路由*/
router.use('/page', pageRouter);
/*访问*/
router.use('/', homeRouter);
/*api路由*/
router.use('/api', apiRouter);





module.exports = router;

