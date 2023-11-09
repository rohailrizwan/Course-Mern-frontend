const express=require('express')
const courseFunction = require('../Functions/CourseFunctions')
const router=express.Router()

router.post('/',courseFunction.Post)
router.get('/',courseFunction.Get)

module.exports=router