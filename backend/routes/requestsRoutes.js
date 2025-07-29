const express = require('express');
const router = express.Router();
const requestsController = require('../controllers/requestsController')

router.post('/createRequest', requestsController.createRequest)

router.get('/', requestsController.getAllRequests)

router.get('/:id', requestsController.getRequest)

module.exports = router