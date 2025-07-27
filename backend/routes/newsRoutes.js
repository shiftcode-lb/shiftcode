const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController')

router.post('/createNews', newsController.createNews)

router.get('/', newsController.getAllNews)

router.get('/:id', newsController.getNews)