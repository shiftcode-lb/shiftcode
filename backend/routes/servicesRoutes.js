const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController')

router.post('/createService', servicesController.createService)

router.get('/', servicesController.getServices)

router.get('/:id', servicesController.getService)

module.exports = router