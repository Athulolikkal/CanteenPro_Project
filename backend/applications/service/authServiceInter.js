export default function authServicesInterface(repositories) {
    const passwordBcrypt = (password) => repositories.passwordBcrypt(password)
    const comparePassword = (passwordDb, password) => repositories.comparePassword(passwordDb, password)
    const createRefreshToken = (user) => repositories.createRefreshToken(user)
    const createAccessToken = (user) => repositories.createAccessToken(user)
    // const createRefreshToken = (user,role) => repositories.createRefreshToken(user,role)
    // const createAccessToken = (user,role) => repositories.createAccessToken(user,role)
    const verifyAccessToken = (token) => repositories.verifyAccessToken(token)

    return {
        passwordBcrypt,
        comparePassword,
        createAccessToken,
        createRefreshToken,
        verifyAccessToken
    }
}