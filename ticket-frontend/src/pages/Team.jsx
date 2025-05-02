import React, { useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { getTeamMembers } from '../utils/api';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const data = await getTeamMembers();
      setTeamMembers(data);
    };
    fetchTeamMembers();
  }, []);

  const handleRemove = (email) => {
    // Logic to remove team member
  };

  return (
    <div className="team">
      <h2>Team Members</h2>
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.email} teamMember={member} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Team;
