const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController')

router.post('/createProject', projectsController.createProject)

router.get('/', projectsController.getAllProjects)

router.get('/:id', projectsController.getProject)