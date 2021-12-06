const express = require('express');

const router = express.Router();

const {
    createUser,
    listUser,
    deleteUser,
    findUser,
    deleteUser,
} = require('../controller/user')

router.get('/create-user', createUser)
router.get('/list-users', listUser)
router.get('/delete-users', deleteUser)
router.get('/find-users', findUser)
router.get('/delete-users', deleteUser)
module.exports = router