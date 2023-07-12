export default async function getPackagesOfCanteen(canteenId, packageDb, pageCount) {
    try {
        const totalPackagesOfCanteen = await packageDb.getPackage(canteenId)
        const totalPackages = totalPackagesOfCanteen.length
        const pageNumber = parseInt(pageCount)
        console.log(totalPackages, 'totalPackages');
        const listLimit = 3;
        const page = parseInt(Math.ceil(totalPackages / listLimit))
        const skipNumber = parseInt((pageNumber - 1) * listLimit)
        console.log(page, 'page is');

        console.log(pageNumber, 'called pagenumber');
        const showPackages = await packageDb.showPackagesOfCanteenbyPagination(canteenId, skipNumber, listLimit)
       
        const details = {
            showPackages,
            page
        }
        return details
        // return  showPackages
    } catch (err) {
        console.log(err)
    }


}