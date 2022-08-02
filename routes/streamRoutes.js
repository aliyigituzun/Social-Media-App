const express = require('express')
const router = express.Router();

const isLogin = require('../middleware/isLoggedIn.js')

const streamGetController = require('../controllers/stream/streamGet.js')

const usersGetController = require('../controllers/stream/usersGet.js')
const usersRawGetController = require('../controllers/stream/usersRawGet.js')
const friendRequestPostController = require('../controllers/stream/requestPost.js')
const friendAcceptPostController = require('../controllers/stream/accept.js')

const friendsGetController = require('../controllers/stream/friendsGet.js')
const friendsRawGetController = require('../controllers/stream/friendsRawGet.js')

const inboxGetController = require('../controllers/stream/inboxGet.js')
const inboxRawGetController = require('../controllers/stream/inboxRawGet.js')

const notFoundGetController = require('../controllers/404Get.js')




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

router.get('/inbox',
    isLogin,
    inboxGetController
    );

 router.get('/inbox_raw',
    isLogin,
    inboxRawGetController
    );

router.post('/accept',
    isLogin,
    friendAcceptPostController
    );

 router.get('/friends',
     isLogin,
     friendsGetController
     );

 router.get('/friends_raw',
     isLogin,
     friendsRawGetController
     );


 router.post('/requests',
     isLogin,
     friendRequestPostController
     )

router.get('/*',
    isLogin,
    notFoundGetController
    );








module.exports = router;