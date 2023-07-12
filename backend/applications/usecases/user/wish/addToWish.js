import wishEntity from "../../../../entities/wish.js";
export default async function addToWish(data, wishDb) {

    try {
          
          if(data.source==='customized'){
            // console.log(data,'data is here')
            const startDate = new Date();
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 10);
    
            data.startDate = startDate,
            data.endDate = endDate
            console.log(data,'data is here')
            const wishDetails = wishEntity(data)
            const isWishAdded = await wishDb.addWish(wishDetails)
            return { status: true, wish: isWishAdded }

          }else{
            const isAlreadyHave = await wishDb.isSamePackage(data.packageId, data.userId)

            if (isAlreadyHave.length > 0) {
                return { status: false, message: 'already in wish list' }
            }
            const startDate = new Date();
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 10);
    
            data.startDate = startDate,
            data.endDate = endDate
            console.log(data);
            const wishDetails = wishEntity(data)
            const isWishAdded = await wishDb.addWish(wishDetails)
            return { status: true, wish: isWishAdded }
          }
        

    } catch (err) {
        console.log(err);
    }

}