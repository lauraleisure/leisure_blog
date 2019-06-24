var path = require('path');
var _ = require('underscore');

var _default = {
   /* RedisSettings: {
        host: "e73f192d94784631.m.cnbja.kvstore.aliyuncs.com",
        port: 6379,
        expires: 60 * 60,
        password: "Huanche123"
    },
    ImageHost: {
        image: "https://7-image.51huanche.com",
        imagePub: "https://7-imgpub.51huanche.com",
        imageRes: "https://res.51huanche.com"
    },*/
    MongoSettings: {
        mongodb: "mongodb://127.0.0.1:27017/leisure-db",
        options: {
            server: {
                socketOptions: {keepAlive: 1},
                poolSize: 10
            },
            promiseLibrary: require('q').Promise
        }
    },

};

var env = process.env.NODE_ENV == undefined ? 'development' : process.env.NODE_ENV;

module.exports = _.extend(_default, require('./' + env + '.js') || {});