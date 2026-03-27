const express = require('express');
const router = express.Router();
const storyArcController = require('../controllers/storyArcController');


router.get('/', 
    /* #swagger.tags = ['Story Arc'] */
    storyArcController.getAllStoryArcs);

router.get('/:id', 
    /* #swagger.tags = ['Story Arc'] */
    storyArcController.getStoryArcById);

router.post('/', 
    /* #swagger.tags = ['Story Arc'] */
    storyArcController.createStoryArc);

router.put('/:id', 
    /* #swagger.tags = ['Story Arc'] */
    storyArcController.updateStoryArc);

router.delete('/:id', 
    /* #swagger.tags = ['Story Arc'] */
    storyArcController.deleteStoryArc);

module.exports = router;