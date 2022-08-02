const User = require('../../models/userModel')

const getFriends = async (req, res) => {
    const friends = []
    

    if (req.session.user.pending.length == 0){
        return res.send(false)
    }
    console.log(req.session.user.friends.length)
    for(let i = 0; req.session.user.friends.length > i; i++){
        
        let friend = await User.find({_id: req.session.user.friends[i].friend})
        friends.push(friend)
        
        
    }
        res.send(friends)     
}

module.exports = getFriends;