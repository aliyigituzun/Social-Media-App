const getInbox = (req, res) => {

    return res.render('stream/inbox.pug', {
        page: 'stream/inbox',
        title: 'Stream'
    })
}

module.exports = getInbox;