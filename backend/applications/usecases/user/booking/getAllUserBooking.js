export default async function getAllBookingsOfUser(userId,bookingDb){
    try{
      const allBookings=await bookingDb.allUserBookings(userId)
      return allBookings
    }catch(err){
        console.log(err);
    }
}