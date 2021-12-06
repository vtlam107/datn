const express = require('express');

const router = express.Router();

const {
    createProduct,
    listProduct,
    findProduct,
    deleteProduct,
    updateProduct,
} = require('../controller/product')

router.post('/', createProduct)
router.get('/', listProduct)
router.get('/:productId', findProduct)
router.delete('/:productId', deleteProduct)
router.patch('/:productId', updateProduct)
module.exports = router