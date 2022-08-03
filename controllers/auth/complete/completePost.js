const mongoose = require('mongoose');

const User = require('../../../models/userModel.js');

module.exports = (req, res) => {
  if (!req.body || !req.body.name || !req.body.surname || !req.body.bday) {
    console.log("got an error")
    req.session.error = 'Please enter all the necessary information';
    
    return res.redirect('/auth/complete');
  }
   
  User.completeUpdate(req.session.user._id ,req.body.name, req.body.surname, req.body.bday, (err, user) => {
    if(err){
      res.redirect('/auth/complete')
    }
    if(user){
      req.session.user = user
      res.redirect('/stream')
    }
  })
  
}