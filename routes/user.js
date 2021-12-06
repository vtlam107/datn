const express = require('express');

const router = express.Router();

const {
    createUser,
    listUser,
    findUser,
    deleteUser,
    updateUser,
} = require('../controller/user')

router.post('/', createUser)
router.get('/', listUser)
router.get('/:userId', findUser)
router.delete('/:userId', deleteUser)
router.patch('/:userId', updateUser)
module.exports = router