const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Received Goal ${req.params.id}` });
});

const newGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(201).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal to be deleted not found');
  }

  await goal.remove();
  res.status(200).json({ message: `Deleted Goal ${goal.text}` });
});

module.exports = {
  getGoals,
  getGoal,
  newGoal,
  updateGoal,
  deleteGoal,
};
