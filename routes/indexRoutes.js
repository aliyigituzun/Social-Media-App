const express = require('express')
const router = express.Router();

const isLogin = require('../middleware/isLoggedIn.js')
const indexGetController = require('../controllers/index/indexController.js');
const notFoundGetController = require('../controllers/index/404Get.js');


router.get('', 
    
    indexGetController
    );
    

module.exports = router

