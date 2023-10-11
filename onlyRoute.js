const path = require('path');

const express = require('express');
const onlyController = require('./controllers/onlyController');
const expenseController = require('./controllers/expenseController');
const cricketController = require('./controllers/cricketController');

const router = express.Router();

//EJS ROUTES
router.get('/', onlyController.getPage);

router.post('/', onlyController.postInfo);

router.post('/deleteItem/:prodId' , onlyController.deleteItem)

router.post('/insertItem/:prodId' , onlyController.insertItem)


// WITHOUR EJS
router.get('/user/booking', expenseController.getData)

router.post('/user/booking', expenseController.postData)

router.delete('/user/booking/:delId', expenseController.deleteData)

router.post('/user/booking/ins/:insId', expenseController.insertData)

//cricket stats routes
router.post('/cricket/addplayer', cricketController.addPlayer)

module.exports = router;
