export default async function confirmBooking(bookingId,bookingDb){
    try{
        console.log(bookingId,'bookingId on confirm booking usecase');
        const bookingConfirmation=await bookingDb.confirmBooking(bookingId)
    }catch(err){
        console.log(err);
    }
}