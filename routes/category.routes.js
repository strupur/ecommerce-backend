const router = require('express').Router();
const categoryController = require('../controllers/category.controllers');

// getCategories

router.get('/categories', categoryController.getCategories);

router.post('/categories', categoryController.createCategory);
// postCategories
// DeleteCategories // putCategories
module.exports = router;