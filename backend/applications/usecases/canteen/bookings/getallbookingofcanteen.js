export default async function getAllBookingOfCanteen(canteenId, name, category, date, bookingDb) {
  try {

    const newDate = new Date(date)
    const formattedDate = newDate.toISOString();
    console.log(canteenId, name, category, formattedDate, 'data comes here');
    const bookedItemsFromCustomized = await bookingDb.findBookingsCustomized(name, category, formattedDate)
    let filteredCustomizedPackages = []
    if (bookedItemsFromCustomized.length > 0) {
      filteredCustomizedPackages = bookedItemsFromCustomized.filter((item) => {
        const startDate = new Date(item.startDate);
        return startDate <= newDate
      })
    }
    const itemsBookedFromPackage = await bookingDb.bookedItemsFromPackage(canteenId, category, formattedDate)
    let filteredBookedPackages = []
    if(itemsBookedFromPackage.length>0){
      filteredBookedPackages=itemsBookedFromPackage.filter((item)=> {
        const startDate = new Date(item.startDate);
        return startDate <= newDate


      })
    }

    const itemList = [...filteredCustomizedPackages, ...filteredBookedPackages];
    return itemList

  } catch (err) {
    console.log(err);
  }
}