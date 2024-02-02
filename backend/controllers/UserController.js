import User from '../models/User';

const UserController = {
    login : (req,res) => {
        return res.json({msg : 'user login api hit'});
    },
    register : (req,res) => {
        return res.json({msg : 'user register api hit'});
    }
}

module.exports = UserController;