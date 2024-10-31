const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product.controllers');

const upload = require('../middlewares/uploadFile');

router.get("/products",  productControllers.getProducts);
// despues agregar validation, isAdmin, en post
router.post("/products", [ upload ], productControllers.createProduct);
router.get("/products/:id", productControllers.getProductById);
router.delete("/products/:id", productControllers.deleteProduct);
//agregar auth, isAdmin,upload(ya lo tiene)
router.put("/products/:id", [ upload ], productControllers.updateProduct);


module.exports = router;