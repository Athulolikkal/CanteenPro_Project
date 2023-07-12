import PackagesEntity from '../../../../entities/package.js'

export default async function addPackages(data, packageDb) {

  if (data?.breakfast) {
    data.breakfast.ratePerDay = parseInt(data.breakfast.ratePerDay) || 0;
    data.breakfast.ratePerMonth = parseInt(data.breakfast.ratePerMonth) || 0;
  }
  if (data?.lunch) {
    data.lunch.ratePerDay = parseInt(data.lunch.ratePerDay) || 0;
    data.lunch.ratePerMonth = parseInt(data.lunch.ratePerMonth) || 0;
  }
  if (data?.dinner) {
    data.dinner.ratePerDay = parseInt(data.dinner.ratePerDay) || 0;
    data.dinner.ratePerMonth = parseInt(data.dinner.ratePerMonth) || 0;
  }
  data.total = parseInt(data.total) || 0;
  console.log(data, 'afterparseint');

  const packagesDetails = PackagesEntity(data)
  const isPackage = await packageDb.addPackages(packagesDetails)
  console.log(isPackage);
  return ({ package: isPackage, status: true })





}
