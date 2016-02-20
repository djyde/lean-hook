var router = require('express').Router();

router
  .post('/textMessage', require('../hooks/wechat/textMessage'))

  .post('/catchem', require('../hooks/wechat/catchem'))

module.exports = router