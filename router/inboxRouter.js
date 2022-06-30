//external imports
const express =require('express')

//internal imports
const {getInbox} =require('../controlar/inboxController')
const decorateHtmlRespose =require('../middleware/common/decorateHtmlResponse')

const router = express.Router()

//Inbox page
router.get('/',decorateHtmlRespose('inbox'),getInbox) 

module.exports=router