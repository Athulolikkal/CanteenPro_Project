export default async function addToUserWallent(details, userDb) {
    try {
        const userId = details?.userId
        const refundedamount = details?.refundedamount
        const userDetails = await userDb.getUserData(userId)
        const currentWallentAmount = userDetails?.wallet ? parseInt(userDetails?.wallet) : parseInt(refundedamount)
        const addToWallent = await userDb.addToWallet(userId, currentWallentAmount)
        if (addToWallent) {
            return { status: true }
        } else {
            return { status: false }
        }

    } catch (err) {
        console.log(err);
    }
}