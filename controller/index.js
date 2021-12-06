const User = require('../models/user');

module.exports = {
    getHello: async (req, res) => {
        return res.send('This is function getHello')
    },
    Signup: async (req, res) => {
        const result = await User.create({
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone,
            username: req.body.username,
            password: req.body.password
        })
        return res.json(result);
    },
    login: async (req, res) => {

        // input username, password
        // 1 doi tuong trong database cos username = username input
        const result = await User.findOne({
            username: req.body.username
        })
        if (result) {
            if (result.password === req.body.password) {
                return res.json({ mess: "dang nhap thanh cong " })
            }
            else return res.json({ mess: "pass k dung" })
        } else {
            return res.json({ mess: "username k dung" })
        }
    }
}

