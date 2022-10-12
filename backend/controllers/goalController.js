const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals!' });
});

const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Received Goal ${req.params.id}` });
});

const newGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(201).json({
    message: 'Goal Saved!',
  });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  getGoal,
  newGoal,
  updateGoal,
  deleteGoal,
};
