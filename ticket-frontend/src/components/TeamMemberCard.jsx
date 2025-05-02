import React from 'react';

const TeamMemberCard = ({ teamMember, onRemove }) => {
  const { name, email } = teamMember;

  return (
    <div className="team-member-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <button onClick={() => onRemove(email)}>Remove from Team</button>
    </div>
  );
};

export default TeamMemberCard;
