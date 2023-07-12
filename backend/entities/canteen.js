export default function canteen(canteen){
    return{
        getCanteenName:()=>canteen?.canteenName,
        getEmail:()=>canteen?.email,
        getPhonenumber:()=>canteen?.phonenumber,
        getCity:()=>canteen?.city,
        getPincode:()=>canteen?.pinCode,
        getPassword:()=>canteen?.password,
        getImage:()=>canteen?.image
    }
}