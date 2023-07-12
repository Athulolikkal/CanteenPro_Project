export default async function getDetails (canteenId,canteenDb){
    try{
      console.log(canteenId,'canteenID');
      const canteenDetails=canteenDb.findCanteenById(canteenId)
      return canteenDetails
    }catch(err){
        console.log(err);
    }

}