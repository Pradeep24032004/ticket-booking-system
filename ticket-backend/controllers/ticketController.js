const Ticket = require('../models/Ticket');

// Create a new ticket
exports.createTicket = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTicket = new Ticket({
      title,
      description,
      assignedTo: 'admin',
      status: 'unresolved',
    });

    await newTicket.save();
    res.status(201).json({ message: 'Ticket created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Mark ticket as resolved
exports.markResolved = async (req, res) => {
  const { ticketId } = req.params;
  try {
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.status = 'resolved';
    await ticket.save();
    res.status(200).json({ message: 'Ticket marked as resolved' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
