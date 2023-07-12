export default async function getAllCanteens(page, canteenDb) {
   try {
      const pageNumber = parseInt(page)
      const canteensCount = await canteenDb.countOfCanteens()
      console.log(canteensCount, 'canteenscount is this');
      if (canteensCount > 0) {
         const pageLimit = 3;
         const numberOfPages = parseInt(Math.ceil(canteensCount / pageLimit))
         const skipNumber = parseInt((pageNumber - 1) * pageLimit)
         const showCanteens = await canteenDb.allCanteens(skipNumber, pageLimit)
         const canteenDetails = {
            showCanteens,
            numberOfPages
         }
         return canteenDetails
      } else {
         return []
      }

   } catch (err) {
      console.log(err)
   }
}