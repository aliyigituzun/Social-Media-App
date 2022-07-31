const getIndex = (req, res) => {
    if(req.session.user && req.session.user){
        return res.redirect('/stream')
    }
    return res.render('index.pug')
}

module.exports = getIndex;