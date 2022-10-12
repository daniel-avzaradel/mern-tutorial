const express = require('express');
const controller = require('../controllers/goalController');
const router = express.Router();

router.get('/goals', controller.getGoals);
router.get('/goals/:id', controller.getGoal);
router.post('/goals', controller.newGoal);
router.put('/goals/:id', controller.updateGoal);
router.delete('/goals/:id', controller.deleteGoal);

module.exports = router;
