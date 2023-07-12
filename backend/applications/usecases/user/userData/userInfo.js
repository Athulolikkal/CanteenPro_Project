export default async function getUserInfo(userId,userDb){
    try{
       const userData=await userDb.getUserData(userId)
       return userData
    }catch(err){
        console.log(err);
    }
}