const session = require("express-session")

const getComplete = (req, res) => {
    
        req.session.destroy()
        res.redirect('/')
    
    

}

module.exports = getComplete