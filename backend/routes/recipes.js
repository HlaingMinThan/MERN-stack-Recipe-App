const express = require('express');
const RecipeController =  require('../controllers/RecipeController');

const router = express.Router();

router.get('',RecipeController.index);
router.post('',RecipeController.store);
router.get('/:id',RecipeController.show);
router.delete('/:id',RecipeController.destroy);
router.patch('/:id',RecipeController.update);

module.exports = router;