const User = require('../../models/userModel')

const getStream = async (req, res) => {
    
    const users = await User.find({})
    users.push(req.session.user._id)

    

    return res.send(users)
}

module.exports = getStream;