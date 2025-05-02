const express = require('express');
const { addTeamMember } = require('../controllers/teamController');
const router = express.Router();

router.post('/add', addTeamMember);

module.exports = router;
