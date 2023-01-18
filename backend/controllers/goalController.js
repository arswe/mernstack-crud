// @route   GET api/goals
// @desc    Get all goals
// @access  Public

const getGoals = async (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all goals' });
};

// @route   POST api/goals
// @desc    Add a goal
// @access  Public

const addGoal = async (req, res) => {
  res.status(200).json({ success: true, msg: 'Add a goal' });
};

// @route   PUT api/goals/:id
// @desc    Update a goal
// @access  Public

const updateGoal = async (req, res) => {
  res.status(200).json({ success: true, msg: `Update goal ${req.params.id}` });
};

// @route   DELETE api/goals/:id
// @desc    Delete a goal
// @access  Public

const deleteGoal = async (req, res) => {
  res.status(200).json({ success: true, msg: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, addGoal, updateGoal, deleteGoal };
