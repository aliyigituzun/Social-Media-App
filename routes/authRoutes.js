const express = require('express')
const router = express.Router();

const loginGetController = require('../controllers/auth/loginGet.js');
const registerGetController = require('../controllers/auth/registerGet.js');
const completeGetController = require('../controllers/auth/completeGet.js');

const completePostController = require('../controllers/auth/completePost.js');
const loginPostController = require('../controllers/auth/loginPost.js');
const registerPostController = require('../controllers/auth/registerPost.js');

router.get('/login', 
    loginGetController
    );

router.post('/login', 
    loginPostController
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
router.get('/logout',
    loginGetController,
    completePostController
    );





module.exports = router;


