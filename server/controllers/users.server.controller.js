/*controller 层：用于业务处理*/
var mongoose=require('mongoose');
require('../modules/users.server.module');
var Users=mongoose.model('Users');

module.exports={
    /*新增*/
    Create:function (req,res,next) {
        var Users = new Users(req.body);
        Users.save(function (err) {
            if (err) return next(err);
            return res.json(Users);
        });
    },
    /*列表*/
    list:function (req,res,next) {
        var pagesize = parseInt(req.query.pageSize, 10) || 10;
        var pagestart = parseInt(req.query.pageStart, 10) || 1;
        Users.find()
            .skip((pagestart - 1) * pagesize)
            .limit(pagesize)
            .exec(function (err,docs) {
                if (err) return next(err);
                return res.json(docs);
            });
    },
    getById:function (req,res,next,id) {
        if(!id) return next(new Error('Users not found'));
        Users
            .findOne({_id:id})
            .exec(function (err,doc) {
                if (err) return next(err);
                if(doc) return next(new Error('Users not found'));
                req.users=doc;
                return next();
            })

    },
    get:function (req,res,next) {
        return req.json(req.users);
    }

}

