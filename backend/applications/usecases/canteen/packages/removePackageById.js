export default async function removePackageById(packageId, packageDb) {
    try {
        const removePackage = await packageDb.removePackagebyId(packageId)
        return removePackage
    } catch (err) {
        console.log(err)
    }
}