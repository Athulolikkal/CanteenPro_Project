

export default async function login(email, password, authdb, authSerivecs) {

    const isEmail = await authdb.findByEmail(email)

    if (isEmail.length != 0 && isEmail[0].password) {

        const isPassword = await authSerivecs.comparePassword(isEmail[0]?.password, password)

        if (isPassword) {
 
            const userIs = {
                userId: isEmail[0]?._id,
                name: isEmail[0]?.name,
                email: isEmail[0]?.email
            }
            // const role = 'user'
            const accessToken = await authSerivecs.createAccessToken(userIs)
            const refreshToken = await authSerivecs.createRefreshToken(userIs)

            console.log(accessToken, ':accessToken of user is this', refreshToken, ':refreshToken of user is this ');
            return ({ status: true, accessToken: accessToken, refreshToken: refreshToken,userInfo:userIs })
        } else {

            return ({ message: 'failed to login with this password', status: false })
        }
    }
    else {
        return ({ message: 'failed to login with this email', status: false })
    }

}