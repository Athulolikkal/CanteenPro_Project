import userEntity from '../../../../entities/user.js'
export default async function googleSignup(name, email, image, authdb, authServices) {
    const isEmail = await authdb.findByEmail(email)
    if (isEmail.length === 0) {

        const user = {
            name: name,
            email: email,
            image: image,
        }
        const userDetails = userEntity(user)
        console.log(userDetails, 'userDetails')
        const isUser = await authdb.addUserGoogleSingup(userDetails)
        // const role = 'user'
        const registeredUser = {

            userId: isUser?._id,
            name: isUser?.name,
            email: isUser?.email
        }
        const accessToken = await authServices.createAccessToken(registeredUser)
        const refreshToken = await authServices.createRefreshToken(registeredUser)

        return ({ status: true, accessToken: accessToken, refreshToken: refreshToken, userInfo: registeredUser });

    } else {
        return ({ message: 'email is already exisits', status: false })
    }
}