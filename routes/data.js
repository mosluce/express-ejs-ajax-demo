var express = require('express');
var router = express.Router();

router.get('/json-demo', function (req, res, next) {
    res.send({
        hello: 'world'
    })
});

/**
 * partial view 
 */
router.get('/view-demo', function (req, res, next) {
    res.render('data-view-demo', {
        title: 'Hello World'
    })
});

module.exports = router;