const mongoose = require('mongoose');
const User = require('../../../models/userModel')

const postFriendRequest = (req, res) => {

    const requestData = req.body.data
    const pendingData = req.session.user._id
    console.log(requestData)
    if(req.body.data != req.session.user._id){
        User.findByIdAndUpdate(mongoose.Types.ObjectId(req.session.user._id),{$push: {
            requests : [
              {
                sentRequest : requestData
              }
            ]
          }},{new: true}, (err, user) => {
            if (err || !user) {
                console.log(err)
                return res.redirect('/auth/login');
              }
          })
          User.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.data),{$push: {
            pending : [ {
              pendingRequest : pendingData
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

module.exports = postFriendRequest;