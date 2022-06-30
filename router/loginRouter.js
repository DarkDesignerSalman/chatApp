//external imports
const express =require('express')

//internal imports
const {getLogin} =require('../controlar/loginControler')  
const decorateHtmlRespose =require('../middleware/common/decorateHtmlResponse')

const router = express.Router()

//login page
router.get('/',decorateHtmlRespose('Login'),getLogin) 

module.exports=router