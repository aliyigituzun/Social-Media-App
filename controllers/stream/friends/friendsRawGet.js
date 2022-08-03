const User = require('../../../models/userModel')

const getFriends = async (req, res) => {
    
    
        
    User.findFriends(req.session.user.friends, req.session.user.friends.length, (err, friends) => {
            if(err){
                return console.log(err)
            }
              if(friends){
                res.send(friends)     
              }
    })
}

module.exports = getFriends;