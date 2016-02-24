var router = require('express').Router();

const estimate = require('../hooks/uber/estimate')

router
  .get('/estimates/price', estimate.price)

module.exports = router