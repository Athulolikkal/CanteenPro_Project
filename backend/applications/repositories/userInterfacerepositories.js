export default function userInterfaceRepositories(repositories) {
    const addBookingAddress = (details, userId) => repositories.addBookingAddress(details, userId)
    const getUserData = (userId) => repositories.getUserData(userId)
    const addToWallet = (userId, currentWallentAmount) => repositories.addToWallet(userId, currentWallentAmount)
    const updateImage=(userId,imageUrl)=> repositories.updateImage(userId,imageUrl)
    return {
        addBookingAddress,
        getUserData,
        addToWallet,
        updateImage
    }
}