const get404 = (req, res) => {
    console.log("here")
    return res.render('index.pug')
}

module.exports = get404;