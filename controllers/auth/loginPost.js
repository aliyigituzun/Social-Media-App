const User = require('../../models/userModel')
module.exports = (req, res) => {
        if (!req.body || !req.body.email || !req.body.password) {
            req.session.error = 'Please enter all the necessary information';
            return res.redirect('/auth/login');
          }
          const user = User.findUser(req.body.email, req.body.password, (err, user) => {
            if(err){return console.log(err)}
            if(!user){
                return console.log('No such user')
              }
              
              req.session.user = user;
              
              if(req.session.user.completed){
                return res.redirect('/stream')
            }
              res.redirect('/auth/complete')
              
          })

    
    }
    

