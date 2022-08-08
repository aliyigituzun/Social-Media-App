const { default: mongoose } = require('mongoose');
const Post = require('../../../models/postModel.js')
const User = require('../../../models/userModel.js')


module.exports = (req, res) => {

    if(!req.body ||!req.body.title || !req.body.content){
        req.session.error = 'Please enter all the necessary information';
        return res.redirect('/auth/login');
    }
    
    const newPostData = {
        title: req.body.title,
        description: req.body.content,
        owner: req.session.user._id
    }

    console.log(newPostData)
    
    const newPost = new Post(newPostData)
    
    newPost.save((err, post) => {
        if(err){
            console.log(err)
        }
        
        return res.redirect('/stream'); })

}


    