const path = require('path');

const express = require('express');
const onlyController = require('./controllers/onlyController');
const bookingController = require('./controllers/bookingController');

const router = express.Router();

router.get('/', onlyController.getPage);

router.post('/', onlyController.postInfo);

router.get('/user/booking', bookingController.getData)

router.post('/user/booking', bookingController.postData)

router.delete('/user/booking/:delId', bookingController.deleteData)

router.post('/user/booking/ins/:insId', bookingController.insertData)

module.exports = router;
