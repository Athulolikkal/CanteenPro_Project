export default function authDbrepositories(repositories) {
  const findByEmail = (email) => repositories.findByEmail(email)
  const addUser = (userDetails) => repositories.addUser(userDetails)
  const addUserGoogleSingup = (userDetails) => repositories.addUserGoogleSingup(userDetails)
  const findCanteenByEmail = (email) => repositories.findCanteenByEmail(email)
  const addCanteen = (canteenDetails) => repositories.addCanteen(canteenDetails)

  return {
    findByEmail,
    addUser,
    addUserGoogleSingup,
    findCanteenByEmail,
    addCanteen
  }
}