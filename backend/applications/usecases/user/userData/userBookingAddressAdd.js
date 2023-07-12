export default async function addUserBookingAddress(data, userDb) {
    try {

        const { Name, Phonenumber, Building, City, District, Pincode, Street, userId } = data;
        const bookingAddress = {
            Name: Name.toUpperCase(),
            Phonenumber,
            Building: Building.toUpperCase(),
            City: City.toUpperCase(),
            District: District.toUpperCase(),
            Pincode,
            Street: Street.toUpperCase()
        }
        const isAddressAdded = await userDb.addBookingAddress(bookingAddress, userId)
        return ({ status: true })


    } catch (err) {
        console.log(err);
    }
}