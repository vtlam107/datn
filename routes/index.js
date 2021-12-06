const express = require('express');

const router = express.Router();

const indexController = require("../controller/index");

router.get('/', function (req, res) {
    console.log("this path /")
})

router.post('/signup', indexController.Signup)

router.post('/login', indexController.login)

module.exports = router