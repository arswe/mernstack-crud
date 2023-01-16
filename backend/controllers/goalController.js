const getGoals = async (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all goals' });
};
