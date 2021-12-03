const express = require('express');

const router = express.Router();

const {
    createUser,
    listUser
} = require('../controller/user')

router.get('/create-user', createUser)
router.get('/list-users', listUser)
module.exports = router