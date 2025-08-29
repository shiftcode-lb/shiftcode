const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController')

router.post('/createTeamMember', teamController.createTeam)

router.get('/', teamController.getTeam)

router.get('/:id', teamController.getTeamMember)

router.get('/count', teamController.countMembers)

module.exports = router