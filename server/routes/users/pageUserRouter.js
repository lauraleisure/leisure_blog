var express = require('express');
var router = express.Router();
var pageController = require('../../controllers/users/pageController');
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.get('/', pageController.home);
router.get('/login', pageController.login);
router.get('/register', pageController.register);

module.exports = router;
