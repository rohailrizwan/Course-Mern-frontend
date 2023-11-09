const courseModel = require("../Models/CourseModel")
const SendResponse = require("./helpers")

let courseFunction={
    Post:async (req,res)=>{
        let {CourseName,CourseDuration,CourseFee}=req.body
        let Courseobj={CourseName,CourseDuration,CourseFee}

        let errArr=[]

        if(!Courseobj.CourseName){
            errArr.push("Course Name required")
        }
        if(!Courseobj.CourseDuration){
            errArr.push("Course Duration required")
        }
        if(!Courseobj.CourseFee){
            errArr.push("Course fee required")
        }

        if(errArr.length>0){
            res.status(400).send(SendResponse(false,"form incomplete",errArr))
        }
        else{
            try{
                    const Course=new courseModel(req.body)
                    await Course.save()
                    res.status(200).send(SendResponse(true,"Form fill successfully",req.body))
            }
            catch(err){
                res.status(500).send(SendResponse(false, "Internal Server Error", err));
            }
        }
    },
    Get: async (req,res)=>{
        try{
            let result=await courseModel.find()
            res.status(200).send(result)
        }
        catch(e){
            res.status(500).send("data not found")
         
        }
    }
    
}

module.exports=courseFunction