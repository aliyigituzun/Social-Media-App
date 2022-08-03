const { default: mongoose } = require('mongoose');
const User = require('../../../models/userModel')

module.exports = (req, res) => {
    if (!req.body || !req.body.email || !req.body.password) {
        req.session.error = 'Please enter all the necessary information';
        return res.redirect('/auth/register');
      }
const newUserData = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
}
const newUser = new User(newUserData);


newUser.save((err, user) => {
    if(err){
        console.log(err)
    }
     
    req.session.user = user;
    console.log(req.session.user)
    return res.redirect('/auth/complete'); })
}
    







