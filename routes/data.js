var express = require('express');
var router = express.Router();

router.get('/json-demo', function (req, res, next) {
    var page = req.query.page;

    res.send({
        hello: 'world',
        page
    })
});

/**
 * partial view 
 */
router.get('/view-demo', function (req, res, next) {
    var page = req.query.page;

    res.render('data-view-demo', {
        title: 'Hello World',
        page
    })
});

module.exports = router;