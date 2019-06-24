'use strict';

module.exports = {
    home: function (req, res) {
        return  res.render('users/home/index',{title:'用户管理'});
    },
    login: function (req, res) {
        return  res.render('users/privilege/login',{title:'用户登录'});
    },
    register: function (req, res) {
        return  res.render('users/privilege/login',{title:'用户注册'});
    },


};