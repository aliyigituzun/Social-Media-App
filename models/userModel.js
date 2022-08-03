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

UserSchema.statics.getAllUsers = function (callback) {
    let User = this 

    const users = User.find({}, (err, users) => {
        if(err || !users){
            console.log(err)
            return callback(true)
        }
        callback(null, users)
    })

    
    
    
}

UserSchema.statics.completeUpdate = function (id, name, surname, bday, callback) {

    
   
    User.findByIdAndUpdate(mongoose.Types.ObjectId(id), {$set: {
        name,
        surname,
        bday,
        completed: true
      }}, {new: true}, (err, user) => {
        if (err || !user) {
          console.log("bruh + " + user)
          return callback(true);
        }
    
        callback(null, user)
        
      });
    
}

UserSchema.statics.findPending = async function (pending, arrayLength, callback) {

    const friends = []
    

    if (pending.length === 0){
        return callback(null, false)
    }
    for(let i = 0; arrayLength > i; i++){
        
        const friend = await User.findById(pending[i].pendingRequest)
        friends.push(friend)
        
        
    }

    callback(null, friends)

    
}








const User = mongoose.model('User', UserSchema);
module.exports = User
