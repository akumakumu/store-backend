var express = require('express');
var router = express.Router();

const { index, actionStatus } = require('./controller');

// // Middleware Authentication
// const { isLoginAdmin } = require('../middleware/auth')

// router.use(isLoginAdmin)

/* GET home page. */
router.get('/', index);
router.put('/status/:id', actionStatus);

module.exports = router;