var CookieUtil = function() {
    var cookies = function() {
        return {
            set: function(key, value) {
                var cookieStr = "";
                cookieStr = key + "=" + value;
                document.cookie = cookieStr;
            },
            getCookie: function(key) {
                var cookieStr = document.cookie;
                return cookieStr;
            },
            removeItem: function(key) {
                var exp = new Date();
                var cval = getCookie(key);
                if (cval != null)
                    document.cookie = key + "='';expires=" + exp.toGMTString();
            },
        };
    }();
    var localStroages = function() {
        return {
            set: function(key, value) {
                window.localStorage.setItem(key, value);
            },
            get: function(key) {
                return window.localStorage.getItem(key);
            },
            removeItem: function(key) {
                window.localStorage.removeItem(key);
            },
        }; //end of return;
    }();
    return (function() {
        var c = cookies;
        var l = localStroages;
        return {
            isLocalStorage: window.localStorage ? true : false,
            get: function(key) {
                if (!this.isLocalStorage) {
                    return c.getCookie(key);
                } else {
                    return l.get(key);
                }
            },
            add: function(key, value) {
                if (!this.isLocalStorage) {
                    c.set(key, value);
                } else {
                    l.set(key, value);
                }
            },
            remove: function(key) {
                if (!this.isLocalStorage) {
                    c.removeItem(key);
                } else {
                    l.removeItem(key);
                }
            }
        };
    })();
}();
var cookieTag = {
    userid: 'userid',
    usertoken: 'token',
    mcid: 'mcid',
    mcname: 'mcname',
    user: 'user'
};