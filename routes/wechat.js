var router = require('express').Router();
var wxAPI = require('wechat-api')
var config = require('../_config')

var wx = new wxAPI(config.wechat.appId, config.wechat.appSecret)
router
  .post('/textMessage', function(req, res) {
    wx.sendText(config.openid, req.body.msg, function(err, result){
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
  })

  .post('/catchem', function(req, res) {
    var msg = ''
    switch(req.body.status){
      case 1:
        // 降价
        msg = req.body.name + ' 降价为 ' + req.body.price + '啦！'
        break
      case 2:
        // 限免
        msg = req.body.name + ' 限免啦！'
        break
      default:
        msg = req.body.name + ' ' + req.body.price
        break
    }

    wx.sendText(config.openid, msg, function(err, result){
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
  })

module.exports = router