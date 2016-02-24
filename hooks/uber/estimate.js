var request = require('superagent')
var config = require('../../_config')

var methods = {
  price: function(req, res){
    console.log(req.body)
    request
      .get('https://api.uber.com.cn/v1/estimates/price')
      .set('Authorization', config.uber.serverToken)
      .query(req.query)
      .end(function(err, result){
        if (err) {
          res.send(err)
        } else {
          res.send(result.body)
        }
      })
  }
}

module.exports = methods