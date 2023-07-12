import React, { useEffect, useState } from 'react'
import DashBoardBox from '../../Components/Canteen/DashBoardBox/DashBoardBox'
import DashBoardChart from '../../Components/Canteen/DashBoardChart/DashBoardChart'
import { useSelector } from 'react-redux'
import axios,{setAccessToken} from '../../Axios/axios'
import { storeType, bookingDetails, packageType } from '../../types'


const DashBoard = () => {
  const [bookingData, setBookingDetails] = useState<bookingDetails>()
  const [packagesInfo, setPackagesInfo] = useState<packageType>()

  const canteenDetails = useSelector((state: storeType) => state.canteenInfo)
  const details = async () => {
    setAccessToken('canteen')
    axios.get(`/booking/dashboarddetails?canteenId=${canteenDetails?.canteenId}&&name=${canteenDetails?.canteenName}`).then(async (response) => {
      // console.log(response.data);
      setBookingDetails(response?.data)

      if (response.data) {
        const packageDetails = await axios.get(`/canteen/totalpackagedetails?canteenId=${canteenDetails?.canteenId}`)
        // console.log(packageDetails.data);
        setPackagesInfo(packageDetails?.data)
      }
    }).catch((err) => console.log(err))
  }
  useEffect(() => {
    details()
  }, [])

  const totalAmount = bookingData?.totalAmount;
  const totalBooking = bookingData?.totalBooking;
  const totalPackages = packagesInfo?.totalPackages;
  const totalVegPackage = packagesInfo?.veg;
  const totalNonPackage = packagesInfo?.nonveg;
  const customizedBooked = bookingData?.customizedBooking;
  const packageBooked = bookingData?.packageBooked



  return (
    <div>
      <DashBoardBox totalAmount={totalAmount} totalBooking={totalBooking} totalPackages={totalPackages} />
      <DashBoardChart totalVegPackage={totalVegPackage} totalNonPackage={totalNonPackage} customizedBooked={customizedBooked} packageBooked={packageBooked}/>
    </div>
  )
}

export default DashBoard