const User = require('../models/user')

module.exports = {
    createUser: async (req, res) => {
        const result = await User.create({
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone,
            username: req.body.username,
            password: req.body.password
        })
        return res.json(result);
    },
    listUser: async (req, res) => {
        const result = await User.find()
        return res.json(result);
    },
    findUser: async (req, res) => {
        const result = await User.findOne()
        return res.json(result);
    },
    deleteUser: async (req, res) => {
        const result = await User.deleteOne({_id: req.params.userId})
        return res.json(result);
    },
    updateUser: async (req, res) => {
        const result = await User.updateOne({_id: req.params.userId}, {name: req.body.name, age: req.body.age, phone: req.body.phone})
        return res.json(result);
    }
}