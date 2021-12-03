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
    }
}