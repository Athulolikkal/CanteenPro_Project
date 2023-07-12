import fileUpload from "../../applications/usecases/common/fileUploadUrl.js"

export default function commonServicesControllers(){
const s3bucketFileUpload=(req,res)=>{
   fileUpload().then((response)=>{
    console.log(response) 
    res.json({url:response})
   }).catch((err)=>console.log(err))
    }

    return{
        s3bucketFileUpload
    }
}