var express = require('express');
var router = express.Router();

const { isLoginPlayer } = require('../middleware/auth')

const { landingPage, detailPage, category, checkOut } = require('./controller');

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkOut);

module.exports = router;