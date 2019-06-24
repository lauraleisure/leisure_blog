
//页面刷新
var reloadPage = function(time, url) {
    setTimeout(function() {
        window.location.href = url ? url : window.location.href;
    }, time * 1000);
};
//验证手机号码
var cellPhoneRegExp = function(val) {
    var reg = /^(1[3-9]{1})+\d{9}$/;
    return reg.test(val);
};
//验证密码
var passwdRegExp = function(val) {
    var regl = /^[0-9a-z]{4,16}$/i;
    var reg = /^[0-9a-z]+([0-9]{1}[a-z]{1}||[a-z]{1}[0-9]{1})[0-9a-z]+$/i;
    return reg.test(val) && regl.test(val);
};
//验证码
var cellPhoneCodeRegExp = function(val) {
    var reg = /^\d{6}$/;
    return reg.test(val);
};
//随机验证码格式验证
var verificationCodeRegExp = function(val) {
    var reg = /^\d{4}$/;
    return reg.test(val);
};
//金额验证
var moneyRegExp = function(val) {
    var reg = /^\d{1,}(\.[0-9]{0,2})?$/;
    return reg.test(val);
};
var getNavRouters = function(page) {
  var navRouterItems={
      userHome:[
          {url:'/users/home',className:'icon_home',icon:'icon_home.png',title:'首页',nav:'user_home'},
          {url:'/users/list',className:'icon_list',icon:'icon_list.png',title:'列表',nav:'user_list'},
          {url:'/users/my',className:'icon_my',icon:'icon_my.png',title:'我的',nav:'user_my'}
      ]
  }
  return navRouterItems[page];
};


//get query
var getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
//set query
var setQueryString = function (key, val) {
    var search = location.search.substr(1);
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    history.replaceState(null, null, '?' + queryArr.join('&'));
};

function ajaxUtil(url, type, data, token) {
    var params = {
        url: url,
        type: type,
        data: data ? JSON.stringify(data) : null,
        beforeSend: function(request) {
            if (token) {
                request.setRequestHeader("Authorization", 'Bearer ' + token);
            }
            request.setRequestHeader("Content-Type", 'application/json');
        }
    };
    var defer = Q.defer();
    params.success = function(d) {
        defer.resolve(d);
    };
    params.error = function(d) {
        defer.reject(d);
    };
    $.ajax(params);
    return defer.promise;
}

function ajaxUtil_q(url, type, data) {
    return Q.fcall(function() {
        var defer = Q.defer();
        var token = CookieUtil.get(cookieTag.usertoken);
        if (!token) {
            raiseError(errorCode.NoTokenCode);
        }
        var mcid = CookieUtil.get(cookieTag.mcid);
        if (mcid) {
            if (url.split('?').length > 1) {
                url = url + '&mcid=' + mcid;
            } else {
                url = url + '?mcid=' + mcid;
            }
        }
        var params = {
            url: url,
            type: type,
            data: data ? JSON.stringify(data) : null,
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", 'Bearer ' + token);
                request.setRequestHeader("Content-Type", 'application/json');
            }
        };
        params.success = function(d) {
            defer.resolve(d);
        };
        params.error = function(d) {
            defer.reject(d);
        };
        $.ajax(params);
        return defer.promise;
    }).catch(function(e) {
        if (e && e.code == errorMgr.getcode(errorCode.NoTokenCode)) {
            redirectLogin();
            throw null;
        } else {
            throw e;
        }
    });
}

function ajaxUtil_notoken(url, type, data) {
    var params = {
        url: url,
        type: type,
        data: data ? JSON.stringify(data) : null,
        beforeSend: function(request) {
            request.setRequestHeader("Content-Type", 'application/json');
        }
    };
    var defer = Q.defer();
    params.success = function(d) {
        defer.resolve(d);
    };
    params.error = function(d) {
        defer.reject(d);
    };
    $.ajax(params);
    return defer.promise;
}
//q版本的this.setState
function setStateQ(obj, that) {
    var defer = Q.defer();
    that.setState(obj, defer.makeNodeResolver());
    return defer.promise;
}
//清理清理本地用户token
var logoutfun = function() {
    CookieUtil.remove(cookieTag.usertoken);
    CookieUtil.remove(cookieTag.mcid);
    CookieUtil.remove(cookieTag.mcname);
    CookieUtil.remove(cookieTag.user);
};
//跳转至未授权页面
var redirectUnAuth = function() {
    logoutfun();
    window.location.href = '/unauthorized';
};
//不带跳转
var redirectLoginPage = function() {
    logoutfun();
    window.location.href = '/login';
};
//跳转至登录页
var redirectLogin = function() {
    logoutfun();
    var redirectUrl = encodeURIComponent(window.location.href)
    window.location.href = '/login?redirectUrl=' + redirectUrl;
};
// 跳转至错误页
var redirectError = function() {
    logoutfun();
    window.location.href = '/error';
};
/*判断是否是微信端*/
var isWeixin = function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
};
/*判断是否是 PC端*/
var isPC = function() {
    var reg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/;
    var agent = window.navigator.userAgent.toLowerCase();
    if (agent.match(reg)) {
        return false;
    } else {
        return true;
    }
};