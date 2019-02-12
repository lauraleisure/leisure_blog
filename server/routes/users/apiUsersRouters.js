/*路由：把用户当前的请求分配给相应的代码*/
var UsersController=require('../../controllers/users.server.controller');
var express = require('express');
var router = express.Router();

router.route('/users').get(UsersController.list).post(UsersController.Create);
router.route('/users:nid').get(UsersController.get);
//获取参数
router.param('nid',UsersController.getById);


module.exports=router;