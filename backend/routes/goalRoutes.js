const express = require('express');
const router = express.Router();

router.get('/goals', (req, res) => {
  res.status(200).json({ message: 'Get Goals!' });
});

router.post('/new-goal', (req, res) => {
  res.status(201).json({ message: 'Goal Saved!' });
});

module.exports = router;
