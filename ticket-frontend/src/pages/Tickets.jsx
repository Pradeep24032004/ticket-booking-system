import React, { useState, useEffect } from 'react';
import { getAllTickets } from '../utils/api';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getAllTickets();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="tickets">
      <h2>All Tickets</h2>
      {tickets.map((ticket) => (
        <div key={ticket._id}>
          <h3>{ticket.title}</h3>
          <p>Status: {ticket.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
