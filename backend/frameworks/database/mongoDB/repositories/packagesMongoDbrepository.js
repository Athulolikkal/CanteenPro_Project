import packageSchema from '../model/packageSchema.js'
// import Canteens from '../model/canteenSchema.js'

export default function packagesDbrepositories() {

    const addPackages = (packages) => {
        const newPackage = new packageSchema({
            breakfast: packages?.getBreakfast(),
            lunch: packages?.getLunch(),
            dinner: packages?.getDinner(),
            canteenId: packages?.getCanteenId(),
            category: packages?.getCategory(),
            total: packages?.getTotal(),
            image: packages?.getImage()

        })
        return newPackage.save()
    }

    const getPackage = async (canteen) => {
        try {
            return packageSchema.find({ canteenId: canteen })
        } catch (err) {
            console.log(err)
        }

    }

    const getAllPackages = async () => {
        try {
            return packageSchema.find({ status: true }).populate('canteenId', 'city canteenName email pincode');
        } catch (err) {
            console.log(err)
        }
    }

    const findPackageById = async (packageId) => {
        try {
            return packageSchema.findById(packageId)
        } catch (err) {
            console.log(err);
        }
    }

    const removePackagebyId = async (packageId) => {
        try {
            const existingPackage = await packageSchema.findById(packageId);
            const updatedStatus = !existingPackage.status;
            const updatedPackage = await packageSchema.findByIdAndUpdate(
                packageId,
                { status: updatedStatus }

            );
            return updatedPackage
        } catch (err) {
            console.log(err);
        }
    }

    const showPackagesOfCanteenbyPagination = async (canteenId, skipnumber, limit) => {
        try {
            return packageSchema.find({ canteenId: canteenId }).skip(skipnumber).limit(limit)

        } catch (err) {
            console.log(err);
        }
    }

    const totalPackageCount = async () => {
        return packageSchema.find().count()
    }

    const showCategorizedPackages = async (menu) => {
        try {


            const query = { [menu]: { $exists: true }, status: true };


            const numberOfPages = await packageSchema
                .find(query)
                .count();

            const showPackages = await packageSchema
                .find(query)
                .select({ [menu]: 1, _id: 1, image: 1, category: 1, status: 1 })
                .populate('canteenId', 'city canteenName email pincode')


            return { showPackages, numberOfPages };
        } catch (err) {
            console.log(err);
        }
    };

    const getTotalNumberOfCanteenPackages = async (id) => {
        try {

            const total = await packageSchema.find({ canteenId: id, status: true }).count()
            return total
        } catch (err) {
            console.log(err);
        }
    }

    const findUserReviewInPackage = async (userId, packageId) => {
        try {
            const isUserHaveReview = await packageSchema.findOne({ _id: packageId, review: { $elemMatch: { userId: userId } } })
            return isUserHaveReview
        } catch (err) {
            console.log(err);
        }
    }
    const addUserReview = async (packageId, newReview) => {
        try {
         const addReview= await packageSchema.findByIdAndUpdate(packageId,{$push:{review:newReview}})
         console.log(addReview);
         return addReview
        } catch (err) {
         console.log(err);
        }
    }
   
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