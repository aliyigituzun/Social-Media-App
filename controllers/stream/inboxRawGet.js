const User = require('../../models/userModel')

const getStream = async (req, res) => {
    const friends = []
    console.log(req.session.user.pending[0].pendingRequest)

    if (req.session.user.pending.length == 0){
        return res.send(false)
    }
    for(let i = 0; req.session.user.pending.length > i; i++){
        
        let friend = await User.find({_id: req.session.user.pending[i].pendingRequest})
        friends.push(friend)
        console.log(friend)
        
    }
        res.send(friends)     
}

module.exports = getStream;