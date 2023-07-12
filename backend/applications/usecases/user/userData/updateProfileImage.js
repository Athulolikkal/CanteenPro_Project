export default async function updateUserImage(imageUrl,userId,userDb){
    try{
      const changeImage= await userDb.updateImage(userId,imageUrl)
      return changeImage
    }catch(err){
        console.log(err);
    }
}