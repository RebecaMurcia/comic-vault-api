const express = require('express');
const router = express.Router();
const storyArcController = require('../controllers/storyArcController');
const { validators } = require('../validations/storyArcValidation');

router.get(
  '/',
  /* #swagger.tags = ['Story Arc']
    #swagger.path = '/api/story-arc'
    */
    storyArcController.getAllStoryArcs
);

router.get(
  '/:id',
  /* #swagger.tags = ['Story Arc']
    #swagger.path = '/api/story-arc'
    */
    validators.getById,
    storyArcController.getStoryArcById
);

router.post(
  '/',
  /* #swagger.tags = ['Story Arc']
    #swagger.path = '/api/story-arc'
    */
    validators.create,
    storyArcController.createStoryArc
);

router.put(
  '/:id',
  /* #swagger.tags = ['Story Arc']
    #swagger.path = '/api/story-arc'
    */
    validators.update,
    storyArcController.updateStoryArc
);

router.delete(
  '/:id',
  /* #swagger.tags = ['Story Arc']
    #swagger.path = '/api/story-arc'
    */
    validators.delete,
    storyArcController.deleteStoryArc
);

module.exports = router;
