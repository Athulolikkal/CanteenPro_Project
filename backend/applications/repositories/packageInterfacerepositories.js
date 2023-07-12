export default function packageInterfacerepositories(repositories) {
    const addPackages = (packageDetails) => repositories.addPackages(packageDetails)
    const getPackage = (canteenId) => repositories.getPackage(canteenId)
    const getAllPackages = () => repositories.getAllPackages()
    const findPackageById = (packageId) => repositories.findPackageById(packageId)
    const removePackagebyId = (packageId) => repositories.removePackagebyId(packageId)
    const showPackagesOfCanteenbyPagination = (canteenId, skipnumber, limit) => repositories.showPackagesOfCanteenbyPagination(canteenId, skipnumber, limit)
    const totalPackageCount = () => repositories.totalPackageCount()
    const showCategorizedPackages = (skip, limit, menu, search) => repositories.showCategorizedPackages(skip, limit, menu, search)
    const getTotalNumberOfCanteenPackages = (id) => repositories.getTotalNumberOfCanteenPackages(id)
    const findUserReviewInPackage=(userId,packageId)=> repositories.findUserReviewInPackage(userId,packageId)
    const addUserReview=(packageId,review)=>repositories.addUserReview(packageId,review)
    return {
        addPackages,
        getPackage,
        getAllPackages,
        findPackageById,
        removePackagebyId,
        showPackagesOfCanteenbyPagination,
        totalPackageCount,
        showCategorizedPackages,
        getTotalNumberOfCanteenPackages,
        findUserReviewInPackage,
        addUserReview
    }
}