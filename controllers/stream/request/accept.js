const mongoose = require('mongoose');
const User = require('../../../models/userModel')

const postFriendAccept = (req, res) => {

    const acceptData = req.body.data

    
    if(req.body.data != req.session.user._id){
        User.findByIdAndUpdate(mongoose.Types.ObjectId(req.session.user._id),{$push: {
            friends : [
              {
                friend : acceptData
              }
            ]
          }},{new: true}, (err, user) => {
            if (err || !user) {
                console.log(err)
                return res.redirect('/auth/login');
              }
          })
          User.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.data),{$push: {
            friends : [ {
              friend : req.session.user._id
            }
            ]
          }},{new: true}, (err, user) => {
            if (err || !user) {
                console.log(err)
                return res.redirect('/auth/login');
              }
          })
        
    }
    
    

}

module.exports = postFriendAccept;