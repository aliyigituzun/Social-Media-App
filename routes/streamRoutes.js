const express = require('express')
const router = express.Router();
const multer = require('multer')

const upload = multer({dest: './images/'})

const isLogin = require('../middleware/isLoggedIn.js')

const streamGetController = require('../controllers/stream/index/streamGet.js')

const usersGetController = require('../controllers/stream/users/usersGet.js')
const usersRawGetController = require('../controllers/stream/users/usersRawGet.js')
const friendRequestPostController = require('../controllers/stream/request/requestPost.js')
const friendAcceptPostController = require('../controllers/stream/request/accept.js')

const friendsGetController = require('../controllers/stream/friends/friendsGet.js')
const friendsRawGetController = require('../controllers/stream/friends/friendsRawGet.js')

const inboxGetController = require('../controllers/stream/inbox/inboxGet.js')
const inboxRawGetController = require('../controllers/stream/inbox/inboxRawGet.js')

const postRenderController = require('../controllers/stream/posts/get.js')
const postInfoPostController = require('../controllers/stream/posts/post.js')
const postsRawGetController = require('../controllers/stream/index/postsRawGet.js')

const notFoundGetController = require('../controllers/index/404Get.js');
const imagePostController = require('../controllers/stream/images/post.js')


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

router.get('/post',
    isLogin,
    postRenderController
    )

router.post('/post',
    isLogin,
    postInfoPostController
    )

router.get('/post-raw',
    isLogin,
    postsRawGetController
    )

router.post('/image',
    upload.single('file'),
    isLogin,
    imagePostController
    )

router.get('/*',
    isLogin,
    friendRequestPostController
    );









module.exports = router;