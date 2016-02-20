module.exports = function(req, res) {
  wx.sendText(config.wechat.openid, req.body.msg, function(err, result){
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}