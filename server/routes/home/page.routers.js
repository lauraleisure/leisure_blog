var express = require('express');
var router = express.Router();
var userPageController = require('../../controllers/users/page.controller');

/* GET home page. */
router.get('/', userPageController.login);

module.exports = router;
