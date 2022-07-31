const bcrypt = require('bcrypt');

module.exports = function (password, password2, callback) {
  console.log('pass1' + password)
  console.log('pass2' + password2)
  bcrypt.compare(password, password2, (err, res) => {
    if (err || !res) return callback(false);
    
     return callback(true);
  });
};