var express = require('express');
var router = express.Router();

const { index, viewCreate, actionCreate, viewEdit, actionEdit, actionDelete, actionStatus } = require('./controller');

// Middleware Authentication
const { isLoginAdmin } = require('../middleware/auth')

router.use(isLoginAdmin)

/* GET home page. */
router.get('/', index);
router.get('/payment', viewCreate);
router.post('/create', actionCreate);
router.get('/edit/:id', viewEdit);
router.put('/edit/:id', actionEdit);
router.delete('/delete/:id', actionDelete);
router.put('/status/:id', actionStatus);

module.exports = router;