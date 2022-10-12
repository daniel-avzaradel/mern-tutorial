const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get Goals!' });
};

const getGoal = (req, res) => {
  res.status(200).json({ message: `Received Goal ${req.params.id}` });
};

const newGoal = (req, res) => {
  res.status(201).json({ message: 'Goal Saved!' });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  getGoal,
  newGoal,
  updateGoal,
  deleteGoal,
};
