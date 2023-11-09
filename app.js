const cors=require('cors')
require('dotenv').config()
const express=require('express')
const mongoose=require("mongoose")
const router = require('./Router/CourseRouter')


const App=express()
App.use(express.json())
App.use(cors())
App.use('/course',router)

mongoose.connect(process.env.MONGOURL).then(()=>{
    App.listen(process.env.PORT,()=>
    {
        console.log(`Database Connected and server is listening http://localhost:${process.env.PORT}`)
    })  
})
.catch((e)=>{
    console.log(e)
})
