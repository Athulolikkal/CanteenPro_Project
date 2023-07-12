export default async function getPackagesCountOfCanteen(id, packageDb) {
    try {

        const packageDetailsOfCanteen = await packageDb.getPackage(id)
        
        if (packageDetailsOfCanteen.length > 0) {
            const totalVegPackages = await packageDetailsOfCanteen.filter((item) =>
                item.category === 'veg' && item.status === true
            )
            const totalNonVegPackages = await packageDetailsOfCanteen.filter((item) =>
                item.category === 'nonveg' && item.status === true
            )
            const totalPackages=parseInt(totalVegPackages.length+totalNonVegPackages.length)
           return{veg:totalVegPackages.length,nonveg:totalNonVegPackages.length,totalPackages:totalPackages}
        } else {
            return {veg:0,nonveg:0}
        }

    } catch (err) {
        console.log(err);
    }
}