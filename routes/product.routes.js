const express = require('express');
const router = express.Router();
// const User = require('../models/user.model');
const productControllers = require('../controllers/product.controllers');


router.get("/products",  productControllers.getProducts);
router.post("/products", productControllers.createProduct);
router.get("/products/:id", productControllers.getProductById);
router.delete("/products/:id", productControllers.deleteProduct);
router.put("/products/:id", productControllers.updateProduct);



module.exports = router;