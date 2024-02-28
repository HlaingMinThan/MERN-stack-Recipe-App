const User = require('../models/User');
const createToken = require('../helpers/createToken');

const UserController = {
    login : (req,res) => {
        return res.json({msg : 'user login api hit'});
    },
    register : async (req,res) => {
        try {
            let {name,email,password} = req.body;
            let user = await User.register(name,email,password);
            let token = createToken(user._id)
            res.cookie('jwt',token, { httpOnly : true, maxAge : 3 * 24 * 60 * 60 * 1000 });
            return res.json({user,token});
        }catch(e) {
            return res.status(400).json({error : e.message});
        }
    }
}

module.exports = UserController;