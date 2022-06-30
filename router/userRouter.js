//external imports
const express =require('express')

//internal imports
const {getUsers} =require('../controlar/usersController')
const decorateHtmlRespose =require('../middleware/common/decorateHtmlResponse')

const router = express.Router()

//User page
router.get('/',decorateHtmlRespose('users'),getUsers) 

module.exports=router