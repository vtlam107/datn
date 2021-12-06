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
    deleteProduct: async (req, res) => {
        await Product.deleteOne();
    },
    findProduct: async (req, res) => {
        const result = await Product.where()
        query.findOne()
        return res.json(result);
    },
    deleteProduct: async (req, res) => {
        const reult = await Product.deleteOne()
        return res.json(result);
    }
}