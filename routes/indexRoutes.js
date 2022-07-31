const express = require('express')
const router = express.Router();

const isLogin = require('../middleware/isLoggedIn.js')
const indexGetController = require('../controllers/indexController.js');

router.get('', 
    
    indexGetController
    );

module.exports = router

