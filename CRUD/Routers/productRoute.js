
const productController = require('../Controller/productController');
const express = require('express');
const router = express.Router();

router.post('/products',productController.addProduct);
router.get('/products/:id',productController.getProductById);
router.put('/products/:id',productController.updateProductById);
router.delete('/products/:id',productController.deleteProductById);
router.post('/products/bulk',productController.insertManyProducts);
router.get('/products',productController.getAllProducts);
router.get('/user-products',productController.getAllProductsByUserId)
module.exports = router;
