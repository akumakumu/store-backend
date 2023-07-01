var express = require('express');
var router = express.Router();

const { viewSignIn, actionSignIn, actionSignOut } = require('./controller');

/* GET home page. */
router.get('/', viewSignIn);
router.post('/', actionSignIn);
router.get('/logout', actionSignOut);

module.exports = router;