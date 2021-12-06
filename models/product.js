const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: String,
    description: String
});

module.exports = mongoose.model("product", productSchema);
