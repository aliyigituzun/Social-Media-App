const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    owner:  {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    },
    title:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Post = mongoose.model('Post', PostSchema);
module.exports = Post