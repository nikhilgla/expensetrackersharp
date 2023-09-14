const path = require('path');

const express = require('express');
const onlyController = require('./controllers/onlyController');

const router = express.Router();

router.get('/', onlyController.getPage);

router.post('/', onlyController.postInfo);


module.exports = router;
