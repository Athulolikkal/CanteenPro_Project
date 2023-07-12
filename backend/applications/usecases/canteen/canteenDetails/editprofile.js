export default async function editProfile(imageUrl, canteenId, canteenDb) {
    try {
        const profileUpdate = await canteenDb.editUserProfile(imageUrl, canteenId)
        const findCanteen= await canteenDb.findCanteenById(canteenId)
        return findCanteen
    } catch (err) {
        console.log(err);
    }

}