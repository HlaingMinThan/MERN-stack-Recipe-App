const User = require('../models/User');
const bcrypt = require('bcrypt');
const UserController = {
    login : (req,res) => {
        return res.json({msg : 'user login api hit'});
    },
    register : async (req,res) => {
        try {
            let {name,email,password} = req.body;
            let userExists = await User.findOne({email});
            if(userExists) {
                throw new Error('user already exists');
            }
            
            let salt = await bcrypt.genSalt();
            let hashValue = await bcrypt.hash(password,salt);

            let user = await User.create({
                name,
                email,
                password : hashValue
            });
            return res.json(user);
        }catch(e) {
            return res.status(400).json({error : e.message});
        }
    }
}

module.exports = UserController;