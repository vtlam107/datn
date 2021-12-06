const User = require('../models/user')

module.exports = {
    createUser: async (req, res) => {
        const result = await User.create({
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone
        })
        return res.json(result);
    },
    listUser: async (req, res) => {
        const result = await User.find()
        return res.json(result);
    },
    deleteUser: async (req, res) => {
        await User.deleteOne();
    },
    findUser: async (req, res) => {
        const result = await User.where();
        query.findOne()
        return res.json(result);
    },
    deleteUser: async (req, res) => {
        const reult = await User.deleteOne()
        return res.json(result);
    }
}