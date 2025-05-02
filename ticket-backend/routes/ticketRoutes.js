const express = require('express');
const { createTicket, getAllTickets, markResolved } = require('../controllers/ticketController');
const router = express.Router();

router.post('/', createTicket);
router.get('/', getAllTickets);
router.put('/resolved/:ticketId', markResolved);

module.exports = router;
