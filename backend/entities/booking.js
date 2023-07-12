export default function wish(wish) {

    return {
        getUserId: () => wish?.userId,
        getPackageId: () => wish?.packageId,
        getCanteenId: () => wish?.canteenId,
        getSource: () => wish?.source,
        getTotal: () => wish?.total,
        getStartDate: () => wish?.StartingDate,
        getEndDate: () => wish?.EndDate,
        getBreakfast: () => wish?.breakfast,
        getLunch: () => wish?.lunch,
        getDinner: () => wish?.dinner,
        getImage:()=>wish?.image,
        getTotalPerDayRate:()=>wish?.totalPerDayRate,
        getTotalBookingAmount:()=>wish?.BookingAmount,
        getTotalBookingDays:()=>wish?.TotalBookingDays,
        getBookingAddress:()=>wish?.userAddress,
        getCategory:()=>wish?.category,
    }
}