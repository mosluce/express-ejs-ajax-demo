var express = require('express');
var router = express.Router();

router.get('/json', function (req, res, next) {
  var page = req.query.page;

  res.send({
    title: 'world ' + page,
    page,
    totalPages: 20
  })
});

module.exports = router;