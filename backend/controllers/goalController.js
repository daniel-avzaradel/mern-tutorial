const asyncHandler = require('express-async-handler');

// @desc    Get Goals
// @route   GET /api/goals
// @acces   Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Success! Get Goals!' });
});

// @desc    Set Goals
// @route   POST /api/goals
// @acces   Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Success! Set Goal!' });
});

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @acces   Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal ${req.params.id}` });
});

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @acces   Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
