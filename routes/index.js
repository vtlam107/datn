const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    console.log("this path /")
})

module.exports = router