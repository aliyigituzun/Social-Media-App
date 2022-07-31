const mongoose = require('mongoose');

const User = require('../../models/userModel.js');

module.exports = (req, res) => {
  if (!req.body || !req.body.name || !req.body.surname || !req.body.bday) {
    
    req.session.error = 'Please enter all the necessary information';
    return res.redirect('/auth/complete');
  }
   
  User.findByIdAndUpdate(mongoose.Types.ObjectId(req.session.user._id), {$set: {
    name: req.body.name,
    surname: req.body.phone,
    bday: req.body.bday.toLowerCase(),
    completed: true
  }}, {new: true}, (err, user) => {
    if (err || !user) {
      console.log(err)
      return res.redirect('/auth/complete');
    }
     
    req.session.user = user;
    
  });
}