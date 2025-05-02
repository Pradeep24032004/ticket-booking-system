const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedTo: { type: String, default: 'admin' },
  status: { type: String, enum: ['resolved', 'unresolved'], default: 'unresolved' },
});

module.exports = mongoose.model('Ticket', TicketSchema);
