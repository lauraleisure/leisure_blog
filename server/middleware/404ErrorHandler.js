/**
 * Created by zhanglei on 2019-6-21.
 */

var Rst = require('../modules/common/rstModule').rst;

module.exports = function (req, res, next) {
  res.status(404);
  if (req.xhr || req.isAjax) {
    res.json((new Rst).notFound('URL').toObj());
  }
  else {
    res.render('error', {message: '未找到要访问的页面', error: {}, title: '错误'});
  }
};
