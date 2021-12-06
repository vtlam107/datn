const express = require('express');

const router = express.Router();

const {
    createProduct,
    listProduct,
    deleteProduct,
    findProduct,
    deleteProduct,
} = require('../controller/product')

router.get('/create-product', createProduct)
router.get('/list-products', listProduct)
router.get('/delete-products', deleteProduct)
router.get('/find-products', findProduct)
router.get('/delete-products', deleteProduct)
module.exports = router