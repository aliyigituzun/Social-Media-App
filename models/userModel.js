const mongoose = require('mongoose');

const verifyPassword = require('./functions/verifyPassword');
const hashPassword = require('./functions/hashedPassword');




const UserSchema = new mongoose.Schema({
    username:   {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 30
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password:   {
        type: String,
        required: true,
    },
    picture:   {
        type: Buffer
    },
    name:   {
        type: String,
    },
    surname:    {
        type: String,
    },
    bday:   {
        type: String
    },
    completed:  {
        type: Boolean,
        default: false
    },
    friends:   [{
        friend:    {
            type: String
        }
    }],
    requests:   [{
        sentRequest:    {
            type: String
        }
    }],
    pending:   [{
        pendingRequest:    {
            type: String
        }
    }],
    
    

})

UserSchema.pre('save', hashPassword);

UserSchema.statics.findUser = function (email, password, callback) {
    let User = this;
  
    User.findOne({email}).then(user => { 
      if (!user) {
          return callback("Can't find user");
      }
  
      verifyPassword(password.toString(), user.password.toString(), (res) => {
        if (res){
            
            return callback(null, user);
        } 
        
        return callback("Password does not match");
      });
    });
  };




const User = mongoose.model('User', UserSchema);
module.exports = User
