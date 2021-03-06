const { query } = require('express');
const Product = require('../models/Product')

module.exports = {
    createProduct: async (req, res) => {
        const result = await Product.create({
            name: req.body.name,
            color: req.body.color,
            price: req.body.price,
            description: req.body.description
        })
        return res.json(result);
    },
    listProduct: async (req, res) => {
        const result = await Product.find()
        return res.json(result);
    },
    findProduct: async (req, res) => {
        const result = await Product.findOne()
        return res.json(result);
    },
    deleteProduct: async (req, res) => {
        const result = await Product.deleteOne({_id: req.params.productId})
        return res.json(result);
    },
    updateProduct: async (req, res) => {
        const result = await Product.updateOne(
            {_id: req.params.productId}, {name: req.body.name, color: req.body.color, price: req.body.price, description: req.body.description})
        return res.json(result);
    }
}