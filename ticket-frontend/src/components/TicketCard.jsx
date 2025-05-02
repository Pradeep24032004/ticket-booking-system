import React from 'react';

const TicketCard = ({ ticket, onChangeStatus, onAssignToTeamMember }) => {
  const { _id, title, status, createdAt } = ticket;

  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>Created At: {new Date(createdAt).toLocaleString()}</p>
      <button onClick={() => onChangeStatus(_id)}>Mark as Resolved</button>
      <button onClick={() => onAssignToTeamMember(_id)}>Assign to Team</button>
    </div>
  );
};

export default TicketCard;
