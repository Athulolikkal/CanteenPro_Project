export default async function googleLogin(email, authdb, authSerivecs) {
    const isEmail = await authdb.findByEmail(email)
    if (isEmail.length != 0 && !isEmail[0].password) {
        // const role = 'user'
        const userIs = {
            userId: isEmail[0]?._id,
            name: isEmail[0]?.name,
            email: isEmail[0]?.email
        }
        const accessToken = await authSerivecs.createAccessToken(userIs)
        const refreshToken = await authSerivecs.createRefreshToken(userIs)
        console.log(accessToken);
        return ({ status: true, accessToken: accessToken, refreshToken: refreshToken, userInfo: userIs })
    } else {
        return ({ message: 'failed to login with this email', status: false })
    }

}