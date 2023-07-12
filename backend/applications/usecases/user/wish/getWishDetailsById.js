export default async function getWishDetailsById(wishId, wishDb) {
    try {
        const wishDetails = await wishDb.getWishById(wishId)

        if (wishDetails.source === 'package') {
            console.log('source is package');

            const packageDetails = await wishDb.getPackageDetailsById(wishId)
             
            const wishItemDetails = {};
            wishItemDetails.image = packageDetails.packageId.image;
            wishItemDetails.packageId=packageDetails.packageId._id;
            wishItemDetails.breakfast = packageDetails.packageId.breakfast
            wishItemDetails.lunch = packageDetails.packageId.lunch
            wishItemDetails.dinner = packageDetails.packageId.dinner
            wishItemDetails.userId = packageDetails.userId;
            wishItemDetails.source = packageDetails.source;
            wishItemDetails.total = packageDetails.total;
            wishItemDetails.status = packageDetails.status;
            wishItemDetails.canteenId = packageDetails.canteenId;
            wishItemDetails._id = packageDetails._id;
            wishItemDetails.category=packageDetails.packageId.category;
            wishItemDetails.totalPerDayRate = parseInt(packageDetails.packageId.breakfast.ratePerDay +
                packageDetails.packageId.lunch.ratePerDay + packageDetails.packageId.dinner.ratePerDay)
            // wishItemDetails.breakfast.canteenId = packageDetails.canteenId;
            // wishItemDetails.lunch.canteenId = packageDetails.canteenId;
            // wishItemDetails.dinner.canteenId = packageDetails.canteenId;
            // console.log(wishItemDetails,'wishitem');
            return wishItemDetails

        }
        else {

            const { breakfast, lunch, dinner, userId, source, totalPerDayRate, status, _id } = wishDetails
            const wishItemDetails = {};

            if (breakfast.mainCourse.length > 0) {
                wishItemDetails.breakfast = breakfast;
            }

            if (lunch.mainCourse.length > 0) {
                wishItemDetails.lunch = lunch;
            }

            if (dinner.mainCourse.length > 0) {
                wishItemDetails.dinner = dinner;
            }

            wishItemDetails.userId = userId;
            wishItemDetails.source = source;
            wishItemDetails.totalPerDayRate = totalPerDayRate;
            wishItemDetails.status = status;
            wishItemDetails._id = _id;

            console.log(wishItemDetails);
            return wishItemDetails
        }


    } catch (err) {
        console.log(err);
    }

}