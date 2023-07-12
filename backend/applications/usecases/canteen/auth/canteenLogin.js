export default async function canteenLoginUsecase(email, password, authdb, authSerivecs) {
    const isEmail = await authdb.findCanteenByEmail(email)
    if (isEmail.length != 0) {

        const isPassword = await authSerivecs.comparePassword(isEmail[0]?.password, password)

        if (isPassword) {
            const role = 'canteen'
            const canteenInfo = {
                canteenId: isEmail[0]?._id,
                canteenName: isEmail[0]?.canteenName,
                email: isEmail[0]?.email,
                image:isEmail[0]?.image,
                phone:isEmail[0]?.phonenumber

            }
            const accessToken = await authSerivecs.createAccessToken(canteenInfo)
            const refreshToken = await authSerivecs.createRefreshToken(canteenInfo)
            return ({ status: true, canteenInfo: canteenInfo, canteenAccessToken: accessToken, canteenRefreshtoken: refreshToken })
        }

        return ({ status: false, message: 'entered password is wrong' })
    } else {
        return ({ status: false, message: 'no such email found' })
    }

}