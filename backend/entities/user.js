export default function user(user) {
    return {
        getUserName: () => user?.name,
        getEmail: () => user?.email,
        getPhonenumber: () => user?.phonenumber,
        getPassword: () => user?.password,
        getImage: () => user?.image,
        // getBookingAddress:()=>user?.bookingAddress,
    }
}