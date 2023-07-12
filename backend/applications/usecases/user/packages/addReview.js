export default async function addReview(userId, packageId, username, message, packageDb) {
    try {
        const isAlreadyhave = await packageDb.findUserReviewInPackage(userId, packageId)
       
        if (isAlreadyhave) {
            console.log('already added review');
            return {status:false}
        } else {
            console.log('no review added on this packge');
            const review = {
                userId: userId ? userId : '',
                userName: username ? username : '',
                review: message ? message : ''
            }
            const addUserReview = await packageDb.addUserReview(packageId, review)
            return {status:true}
        }
    } catch (err) {
        console.log(err);
    }
}