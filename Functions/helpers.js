let SendResponse=(isSuccess,message,data)=>{
   return{
        isSuccess,
        message: isSuccess ? message : "",
        error: !isSuccess ? message : "",
        data,
   }
}
module.exports=SendResponse