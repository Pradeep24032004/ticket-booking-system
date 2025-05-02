const Team = require('../models/Team');

// Add a new team member
exports.addTeamMember = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newMember = new Team({
      name,
      email,
    });

    await newMember.save();
    res.status(201).json({ message: 'Team member added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
