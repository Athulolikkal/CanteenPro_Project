export default function wish(wish) {

    return {
        getUserId: () => wish?.userId,
        getPackageId: () => wish?.packageId,
        getCanteenId: () => wish?.canteenId,
        getSource: () => wish?.source,
        getTotal: () => wish?.total,
        getStartDate: () => wish?.startDate,
        getEndDate: () => wish?.endDate,
        getBreakfast: () => wish?.breakfast,
        getLunch: () => wish?.lunch,
        getDinner: () => wish?.dinner,
        getImage:()=>wish?.image,
        getTotalPerDayRate:()=>wish?.totalPerDayRate
    }
}