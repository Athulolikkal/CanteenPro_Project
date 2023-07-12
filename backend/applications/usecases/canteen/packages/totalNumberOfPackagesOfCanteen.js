export default async function findTotlPackagesOfCanteen(id,packageDb){
    try{
       const total=await packageDb.getTotalNumberOfCanteenPackages(id)
       return total
    }catch(err){
        console.log(err);
    }
}