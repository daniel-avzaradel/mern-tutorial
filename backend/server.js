const express = require('express');
const router = require('./routes/goalRoutes');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
