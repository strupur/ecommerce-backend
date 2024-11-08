const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product.controllers');

const upload = require('../middlewares/uploadFile');

router.get("/api/productos",  productControllers.getProducts);
// despues agregar validation, isAdmin, en post
router.post("/api/productos", [ upload ], productControllers.createProduct);
router.get("/api/productos/:id", productControllers.getProductById);
router.delete("/api/productos/:id", productControllers.deleteProduct);
//agregar auth, isAdmin,upload(ya lo tiene)
router.put("/api/productos/:id", [ upload ], productControllers.updateProduct);


module.exports = router;