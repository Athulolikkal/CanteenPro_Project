export default function canteenInterfaceMongoDb(repositories) {
    const countOfCanteens = () => repositories.countOfCanteens()
    const allCanteens = (skipnumber, limit) => repositories.allCanteens(skipnumber, limit)
    const editUserProfile = (url, id) => repositories.editUserProfile(url, id)
    const findCanteenById = (id) => repositories.findCanteenById(id)
   
    return {
        countOfCanteens,
        allCanteens,
        editUserProfile,
        findCanteenById,
       
    }
}