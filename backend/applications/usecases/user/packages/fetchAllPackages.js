export default async function fetchallpackages(page, searchValue, packageDb) {
    try {
        const totalPackageCount = await packageDb.totalPackageCount();
        const pageNumber = parseInt(page);

        if (totalPackageCount > 0) {
            const pageLimit = 3;
            const allPackages = await packageDb.getAllPackages();
            
           
            //-------------------search of packages by name of canteen,total,city and emial
            const keys = ['canteenId.canteenName', 'total','category','canteenId.city', 'canteenId.email'];
            const search = (allPackages) => {
                return allPackages.filter((item) =>
                    keys.some((key) =>
                        recursiveKeySearch(item, key, searchValue)
                    )
                );
            };

            const recursiveKeySearch = (obj, key, value) => {
                const keys = key.split('.');
                const currentKey = keys[0];

                if (keys.length === 1) {
                    return String(obj[currentKey]).toLowerCase().includes(value.toLowerCase());
                } else {
                    return recursiveKeySearch(obj[currentKey], keys.slice(1).join('.'), value);
                }
            };
            //-----------------------------end of search------------------------------

            const packages = await search(allPackages)
            const totalCountofpackages = packages.length
            const numberOfPages = parseInt(Math.ceil(totalCountofpackages / pageLimit))
            const skipNumber = parseInt((pageNumber - 1) * pageLimit)
            console.log(totalCountofpackages, 'totalCountOfPackages');

            const paginatedData = (skip, limit) => {
                const skippedData = packages.slice(skip)
                const limitedData = skippedData.slice(0, limit)
                return limitedData
            }
            const data = paginatedData(skipNumber, pageLimit)

            const details = {
                packages: data,
                pages: numberOfPages
            }
            return details

        } else {
            return [];
        }

    } catch (err) {
        console.log(err);
    }
}
