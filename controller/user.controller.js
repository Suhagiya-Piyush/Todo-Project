const User = require('../model/user.model');
const passport = require('passport');



exports.showUserLogin = async (req, res) => {
    try {
        res.render('login.ejs');
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}

exports.userLogin = passport.authenticate('local', { 
    failureRedirect: '/api/user/login',
    successRedirect: '/api/todo',
    failureFlash: false,
    successFlash: true
 })

exports.userRegister = async (req, res) => {
    try {
        let user = await User.findOne({ email : req.body.email });
        if (user) {
            return res.json({message : 'User already register please login'});
        }
        user = await User.create(req.body);
        res.redirect('login');
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}