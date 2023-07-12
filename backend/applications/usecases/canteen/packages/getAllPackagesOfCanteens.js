export default async function getAllPackagesOfCanteen(packageDb) {

    try {
        const allPackages = await packageDb.getAllPackages()
        return allPackages
    } catch (err) {
        console.log(err);
    }


}