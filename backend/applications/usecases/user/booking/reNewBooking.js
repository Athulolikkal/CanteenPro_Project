export default async function reNewBookingUseCase(newEndDate, active, actualEndDate, bookingId, source, count, renewBookingAmount, newStartDate, bookingDb) {
  try {

    const getBooking = await bookingDb.getBookingById(bookingId)

    if (active) {
      if (getBooking) {
        const bookingAmount = getBooking?.bookingAmount + renewBookingAmount;
        const totalDays = getBooking?.totalDays + count
        const endDate = new Date(newEndDate);
        const formattedDate = endDate.toISOString().slice(0, 19) + '.000+00:00';
        console.log(formattedDate);
        const renewBooking = await bookingDb.findByIdAndRenewBooking(bookingId, bookingAmount, totalDays, formattedDate)
        return renewBooking
      }
    } else {
      console.log(`call comes to usecase:${active}`);
      if (getBooking) {
        const bookingAmount = getBooking?.bookingAmount + renewBookingAmount;
        const totalDays = getBooking?.totalDays + count
        const endDate = new Date(newEndDate)
        const startDate = new Date(newStartDate)
        const formattedEndDate = endDate.toISOString().slice(0, 19) + '.000+00:00';
        const formattedStartDate = startDate.toISOString().slice(0, 19) + '.000+00:00';
        console.log(formattedEndDate, formattedStartDate);
        console.log(bookingAmount, totalDays);
        const renewBooking = await bookingDb.findByIdAndRenewNonActiveBooking(bookingId, bookingAmount, totalDays, formattedEndDate, formattedStartDate)
        return renewBooking
      }
    }
  } catch (err) {
    console.log(err, 'err from renew booking usecase');
  }
}