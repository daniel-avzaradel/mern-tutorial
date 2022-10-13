const express = require('express');
const controller = require('../controllers/goalController');
const router = express.Router();

// router.get('/', controller.getGoals);
// router.post('/', controller.newGoal);
// alternative refactor =>
router.route('/').get(controller.getGoals).post(controller.newGoal);

// router.get('/:id', controller.getGoal);
// router.put('/:id', controller.updateGoal);
// router.delete('/:id', controller.deleteGoal);
// alternative refactor =>
router
  .route('/:id')
  .get(controller.getGoal)
  .put(controller.updateGoal)
  .delete(controller.deleteGoal);

module.exports = router;
