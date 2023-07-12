export default async function fecthPackagesByCategory(pagenumber,menu,searchValue,packageDb){
  try{
    // console.log(pagenumber,menu,search);
   
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    
   
   
   
    const pageNumber=parseInt(pagenumber)
    const categorizedPackages= await packageDb.showCategorizedPackages(menu)
   if(categorizedPackages.numberOfPages>0){
    const pageLimit=3;
   
    
    
    const packages=categorizedPackages?.showPackages
    const keys=['canteenId.canteenName',`${menu}.mainCourse`,`${menu}.sideCourse`,`${menu}.specials`,`${menu}.availableTime`,`${menu}.ratePerDay`,`${menu}.ratePerMonth`,'category','canteenId.city'];
    const search=(packages)=>{
         return packages.filter((item)=>
         keys.some((key)=>
         recursiveKeySearch(item,key,searchValue))
         )}

         const recursiveKeySearch = (obj, key, value) => {
          const keys = key.split('.');
          const currentKey = keys[0];

          if (keys.length === 1) {
              return String(obj[currentKey]).toLowerCase().includes(value.toLowerCase());
          } else {
              return recursiveKeySearch(obj[currentKey], keys.slice(1).join('.'), value);
          }
      };
    const searchItems=await search(packages)
    const totalCountOfSearchItems=searchItems.length
    console.log(totalCountOfSearchItems,'totalCount of items');
    const Pages = parseInt(Math.ceil(totalCountOfSearchItems/ pageLimit))
    const skipNumber=parseInt(( pageNumber-1)*pageLimit)
    const paginatedData = (skip, limit) => {
      const skippedData = searchItems.slice(skip)
      const limitedData = skippedData.slice(0, limit)
      return limitedData
  }
  const data = paginatedData(skipNumber, pageLimit)
  const shuffledData = shuffleArray(data);
    
   return {showPackages:shuffledData,numberOfPages:Pages}
   
}else{
    return countOfPackages
   }
   

 
}catch(err){
   console.log(err,'an error happend in fetchpagesbycategory in usecase of user packages');
  }
   

}



// export default async function fecthPackagesByCategory(pagenumber,menu,search,packageDb){
//   try{
//     console.log(pagenumber,menu,search);
//     const pageNumber=parseInt(pagenumber)
//     const countOfPackages=await packageDb.totalPackageCount();
//    if(countOfPackages>0){
//     const pageLimit=3;
//     // const numberOfPages = parseInt(Math.ceil(countOfPackages / pageLimit))
//     const skipNumber = parseInt((pageNumber - 1) * pageLimit)
//     const showPackages= await packageDb.showCategorizedPackages(skipNumber,pageLimit,menu,search)
//     // console.log(showPackages);
//     const Pages = parseInt(Math.ceil(showPackages.numberOfPages/ pageLimit))
//     showPackages.numberOfPages=Pages
   
//     return showPackages
// }else{
//     return countOfPackages
//    }
   

 
// }catch(err){
//    console.log(err,'an error happend in fetchpagesbycategory in usecase of user packages');
//   }
   

// }