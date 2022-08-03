const User = require('../../../models/userModel')

const getStream = async (req, res) => {
    
    User.findPending(req.session.user.pending, req.session.user.pending.length, (err, friends) => {
        if(err){
            return console.log(err)
        }
          if(friends){
            res.send(friends)     
          }
    })
    
        
}

module.exports = getStream;