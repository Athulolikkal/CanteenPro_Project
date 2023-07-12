import CanteenEntity from '../../../../entities/canteen.js'
export default async function canteenSignup(CanteenName, Email, Phonenumber, City, Pincode, Password, authdb, authServices) {
    console.log(CanteenName, Email, Phonenumber, City, Pincode, Password);
    const isEmail = await authdb.findCanteenByEmail(Email)
    if(isEmail?.length===0){
        const hashedPassword= await authServices.passwordBcrypt(Password)
        const canteen={
            canteenName:CanteenName,
            email:Email,
            phonenumber:Phonenumber,
            city:City,
            pinCode:Pincode,
            password:hashedPassword
        }

        const canteenDetails=CanteenEntity(canteen)
        const isCanteen = await authdb.addCanteen(canteenDetails)
       
        const role='canteen'
        const canteenInfo={
            canteenId:isCanteen?._id,
            canteenName:isCanteen?.canteenName,
            canteenemail:isCanteen?.email,
        }
        console.log(canteenInfo);
        const accessToken= await authServices.createAccessToken(canteenInfo)
        const refreshToken= await authServices.createRefreshToken(canteenInfo)
        return ({status:true,canteenDetails:canteenInfo,canteenAccesstoken:accessToken,canteenRefreshToken:refreshToken})
        
    }
    else{
        return ({status:false,message:'canteen is already exisit do login'})
    }

}