const mongoose = require("mongoose")
const {Schema}=mongoose

const CourseSchema =new Schema( {
    CourseName: {
        type: String,
        require: true
    },
    CourseDuration: {
        type: String,
        require: true
    },
    CourseFee: {
        type: String,
        require: true
    },
    CourseDate: {
        type: Date,
        default:Date.now
    }
})

const courseModel=mongoose.model('course',CourseSchema)
module.exports=courseModel