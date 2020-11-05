const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.find();
        return res.json(users);
        
    },

    async store(req, res) {
        const { password, email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                password,
                email,
            });
        }

        console.log(req.body);
        return res.json(user);
    }
};