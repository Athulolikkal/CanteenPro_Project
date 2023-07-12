export default async function getPackagesById(packageId, packageDb) {
    try {
        const packageIs = await packageDb.findPackageById(packageId)

        return packageIs
    } catch (err) {
        console.log(err);
    }
}