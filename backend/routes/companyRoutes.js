const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

router.get('/', companyController.getCompany)

router.post('/createCompany', companyController.addCompany)

module.exports = router