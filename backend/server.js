const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/api/goals', (req, res) => {
  res.status(200).json({ message: 'Get Goals' });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
