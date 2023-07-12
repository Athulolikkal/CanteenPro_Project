export default function packages(packages) {
    return {
        getBreakfast: () => packages?.breakfast,
        getLunch: () => packages?.lunch,
        getDinner: () => packages?.dinner,
        getImage: () => packages?.image,
        getTotal: () => packages?.total,
        getCanteenId: () => packages?.canteenId,
        getCategory: () => packages?.cate,
    }
}