const express = require('express')
const router = express.Router();

const isLogin = require('../middleware/isLoggedIn.js')

const streamGetController = require('../controllers/stream/streamGet.js')
const usersGetController = require('../controllers/stream/usersGet.js')
const usersRawGetController = require('../controllers/stream/usersRawGet.js')
const friendRequestPostController = require('../controllers/stream/requestPost.js')



router.get('/',
    isLogin,
    streamGetController
    );

router.get('/users',
    isLogin,
    usersGetController
    );

router.get('/users_raw',
    isLogin,
    usersRawGetController
    );

router.post('/requests',
    isLogin,
    friendRequestPostController
    )







module.exports = router;