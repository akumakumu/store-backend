var express = require('express');
var router = express.Router();

const { index } = require('./controller');

// Middleware Authentication
const { isLoginAdmin } = require('../middleware/auth');

router.use(isLoginAdmin)

router.get('/', index)

module.exports = router;