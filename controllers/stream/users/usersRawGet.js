const User = require('../../../models/userModel')

const getStream = async (req, res) => {
    
  const users = await User.getAllUsers((err, users) => {
    if(err){return console.log(err)}
      if(!users){
        return console.log('No such user')
          }
        if(users){
          users.push(req.session.user._id)
        }
    

      return res.send(users)


  })
    
}

module.exports = getStream;