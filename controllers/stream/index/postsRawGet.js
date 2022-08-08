const Post = require('../../../models/postModel.js')
const User = require('../../../models/userModel.js')
const mongoose = require('mongoose');


module.exports = async (req, res) => {
    const user = await User.findById(req.session.user._id)
    const streamContent = []

    

    for(let i = 0; user.friends.length > i; i++){
        const friendID = user.friends[i].friend
        console.log(friendID)
        const friendPosts = await Post.find({owner: friendID})
        streamContent.push(friendPosts)
    }
    console.log(streamContent)
    res.status(200).send(streamContent)
}