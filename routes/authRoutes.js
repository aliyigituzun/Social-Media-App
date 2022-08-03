const express = require('express')
const router = express.Router();

const loginGetController = require('../controllers/auth/login/loginGet.js');
const registerGetController = require('../controllers/auth/register/registerGet.js');
const completeGetController = require('../controllers/auth/complete/completeGet.js');

const completePostController = require('../controllers/auth/complete/completePost.js');
const loginPostController = require('../controllers/auth/login/loginPost.js');
const registerPostController = require('../controllers/auth/register/registerPost.js');

const notFoundGetController = require('../controllers/index/404Get.js')


router.get('/login', 
    loginGetController
    );

router.post('/login', 
    loginPostController
    );

router.get('/logout',
    loginGetController,
    completePostController
    );

router.get('/register',
    registerGetController
    );

router.post('/register',
    registerPostController
    );

router.get('/complete',
    completeGetController
    );

router.post('/complete',
    completePostController
    );

router.get('/*',
    notFoundGetController
    );








module.exports = router;


