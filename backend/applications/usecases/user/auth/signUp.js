import userEntity from '../../../../entities/user.js'
export default async function userSignup(email, name, phonenumber, password, authdb, authSerivecs) {
    const hashedPassword = await authSerivecs.passwordBcrypt(password)
    const isEmail = await authdb.findByEmail(email)
    if (isEmail.length === 0) {
        const user = {
            name: name,
            email: email,
            phonenumber: phonenumber,
            password: hashedPassword
        }


        const userDetails = userEntity(user)
        const isUser = await authdb.addUser(userDetails)
        

        const registeredUser = {

            userId: isUser?._id,
            name: isUser?.name,
            email: isUser?.email
        }
        // const role = 'user'
        const accessToken = await authSerivecs.createAccessToken(registeredUser)
        const refreshToken = await authSerivecs.createRefreshToken(registeredUser)
       
        return ({ status: true, accessToken: accessToken, refreshToken: refreshToken,userInfo:registeredUser });
    }
    else {
        return ({ message: 'email is already exisits', status: false })
    }
}