const User = require('../../models/userModel')

const getStream = async (req, res) => {
    console.log('in')
    const users = await User.find({})

    

    return res.send(users)
}

module.exports = getStream;