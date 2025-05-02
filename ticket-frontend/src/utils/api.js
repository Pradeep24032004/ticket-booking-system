const API_URL = 'https://yourbackendapi.com/api';

export const getTickets = async () => {
  const response = await fetch(`${API_URL}/tickets`);
  return await response.json();
};

export const getAllTickets = async () => {
  const response = await fetch(`${API_URL}/tickets/all`);
  return await response.json();
};

export const getTeamMembers = async () => {
  const response = await fetch(`${API_URL}/team`);
  return await response.json();
};

export const getUserProfile = async () => {
  const response = await fetch(`${API_URL}/user/profile`);
  return await response.json();
};

export const updateProfile = async (user) => {
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
};
