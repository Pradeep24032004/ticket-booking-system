import React, { useState, useEffect } from 'react';
import TicketCard from '../components/TicketCard';
import { getTickets } from '../utils/api';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getTickets();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  const handleChangeStatus = (ticketId) => {
    // Logic for marking tickets as resolved
  };

  const handleAssignToTeamMember = (ticketId) => {
    // Logic for assigning tickets to team members
  };

  return (
    <div className="dashboard">
      <h1>Ticket Dashboard</h1>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket._id}
          ticket={ticket}
          onChangeStatus={handleChangeStatus}
          onAssignToTeamMember={handleAssignToTeamMember}
        />
      ))}
    </div>
  );
};

export default Dashboard;
