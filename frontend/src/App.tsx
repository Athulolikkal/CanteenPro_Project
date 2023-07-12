import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';


const Login = React.lazy(() => import('./Pages/User/LoginPage'))
const Signup = React.lazy(() => import('./Pages/User/SignupPage'))
import ErrorBoundaryHandle from './Pages/ErrorBoundaryHandle';
import PageNotFound from './Pages/User/PageNotFound';
import LoadingPage from './Pages/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
const UserLayout = React.lazy(() => import('./Components/User/Layout/Layout'))
const UserHomePage = React.lazy(() => import('./Pages/User/HomePage'))
const OnMyWish = React.lazy(() => import('./Pages/User/OnMyWish'))
const LandingPage = React.lazy(() => import('./Pages/User/LandingPage'))
const CanteenLayout = React.lazy(() => import('./Components/Canteen/Layout/Layout'))
const AddPackages = React.lazy(() => import('./Pages/Canteen/AddPackages'))
const CanteenLogin = React.lazy(() => import('./Pages/Canteen/CanteenLoginPage'))
const CanteenSignUp = React.lazy(() => import('./Pages/Canteen/CanteenSignupPage'))
const CanteenHome = React.lazy(() => import('./Pages/Canteen/CanteenHome'))
const PackageView = React.lazy(() => import('./Components/Canteen/Packageview/PackageView'))
const UserPackageview = React.lazy(() => import('./Components/User/UserPackageView/PackageView'))
const ShowAllCanteens = React.lazy(() => import('./Components/User/ShowAllCanteens/ShowAllCanteens'))
const ShowAllPackages = React.lazy(() => import('./Components/User/ShowAllPackages/ShowAllPackages'))
const BuildCanteen = React.lazy(() => import('./Pages/User/BuildCanteen'))
const UserJwtReminder = React.lazy(() => import('./Pages/jwtSessionExpried'))
const CanteenJwtReminder = React.lazy(() => import('./Pages/Canteen/JwtSessionExpiredCanteen'))
const BookingFromWish = React.lazy(() => import('./Pages/User/PackageBooking'))
const ViewItemFromWish = React.lazy(() => import('./Components/User/WishItemView/WishItemView'))
const OtpVerification = React.lazy(() => import('./Components/User/Otp/OtpVerification'))
// const PaymentPage = React.lazy(() => import('./Components/User/UserPayment/UserPayment'))
const CanteenAllBookings = React.lazy(() => import('./Pages/Canteen/AllBookings'))
const BookingconfirmPage = React.lazy(() => import('./Pages/Success'))
const DashBoard =React.lazy(()=>import('./Pages/Canteen/DashBoard'))
const UserHome = React.lazy(()=>import('./Pages/User/UserProfilePage'))
const RenewBookingConfiramtionAndPayment = React.lazy(()=>import('./Components/User/RenewConfirmation/RenewConfirmation'))



import { isUser } from './redux/user/userdataReducer'
import { addCanteenTokens } from './redux/canteen/canteenTokensReducers'

interface storeType {
  canteenTokens?: {
    canteenAccessToken?: ''
    canteenRefreshToken?: ''
  }
  userdata?: ''
}



function App() {

  // const userIs =localStorage.getItem('userAccessToken')
  const user = useSelector((state: storeType) => state.userdata)
  const canteen = useSelector((state: storeType) => state?.canteenTokens)
  const isCanteen = canteen?.canteenAccessToken
  // console.log(isCanteen, 'canteenaccessToken');
  // console.log(canteen, 'canteen')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUser(user));
    dispatch(addCanteenTokens(canteen))
  }, [dispatch]);


  return (



    <>

      <Router>
        <ErrorBoundaryHandle>


          <Routes>

            <Route path='/user/login' element={user ? (<Navigate to='/' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}> <Login /></React.Suspense>)} />
            <Route path='/user/signup' element={user ? (<Navigate to='/' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}><Signup /></React.Suspense>)} />
            <Route path='/user/landingpage' element={user ? (<Navigate to='/' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}><LandingPage /></React.Suspense>)} />

           
            {/*------------------------userlayout------------------------------------------------*/}
            <Route path='/' element={user ? (<React.Suspense fallback={<LoadingPage />} ><UserLayout /></React.Suspense>) : (<Navigate to='/user/landingpage' replace={true} />)}>
              <Route index element={<React.Suspense fallback={<LoadingPage />}><UserHomePage /></React.Suspense>} />
              <Route path="user/onwish" element={<React.Suspense fallback={<LoadingPage />}><OnMyWish /></React.Suspense>} />
              <Route path='view/:packageId' element={<React.Suspense fallback={<LoadingPage />}><UserPackageview /></React.Suspense>} />
              <Route path='user/showallcanteens' element={<React.Suspense fallback={<LoadingPage />}><ShowAllCanteens /></React.Suspense>} />
              <Route path='user/showallpackages' element={<React.Suspense fallback={<LoadingPage />}><ShowAllPackages /></React.Suspense>} />
              <Route path='user/buildcanteen' element={<React.Suspense fallback={<LoadingPage />}><BuildCanteen /></React.Suspense>} />
              <Route path='user/jwtsessionexpired' element={<React.Suspense fallback={<LoadingPage />}><UserJwtReminder /></React.Suspense>} />
              <Route path='user/bookingfromwish' element={<React.Suspense fallback={<LoadingPage />}><BookingFromWish /></React.Suspense>} />
              <Route path='user/wishitemview/:wishId' element={<React.Suspense fallback={<LoadingPage />}><ViewItemFromWish /></React.Suspense>} />
              <Route path='user/otpverification' element={<React.Suspense fallback={<LoadingPage />}><OtpVerification /></React.Suspense>} />
              {/* <Route path='user/paymentpage' element={<React.Suspense fallback={<LoadingPage />}><PaymentPage /></React.Suspense>} /> */}
              <Route path='user/paymentsuccess' element={<React.Suspense fallback={<LoadingPage />}><BookingconfirmPage /></React.Suspense>} />
              <Route path='user/userhome' element={<React.Suspense fallback={<LoadingPage />}><UserHome /></React.Suspense>} />
              <Route path='user/renewbookingconfirm' element={<React.Suspense fallback={<LoadingPage />}><RenewBookingConfiramtionAndPayment /></React.Suspense>} />
              
            </Route>
            {/*-----------------------------------//userlayout-end----------------------------*/}




            <Route path='/canteen/login' element={isCanteen ? (<Navigate to='/canteen' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}><CanteenLogin /></React.Suspense>)} />
            <Route path='/canteen/signup' element={isCanteen ? (<Navigate to='/canteen' replace={true} />) : (<React.Suspense fallback={<LoadingPage />}><CanteenSignUp /></React.Suspense>)} />

           
            {/* ----------------------------------Canteen_Layout_Starts----------------------------- */}

            <Route path='/canteen' element={isCanteen ? (<React.Suspense fallback={<LoadingPage />}><CanteenLayout /></React.Suspense>) : (<Navigate to='/canteen/login' />)}>
              <Route index element={<React.Suspense fallback={<LoadingPage />}><CanteenHome /></React.Suspense>} />
              <Route path='addpackages' element={<React.Suspense fallback={<LoadingPage />}><AddPackages /></React.Suspense>} />
              <Route path='view/:packageId' element={<React.Suspense fallback={<LoadingPage />}><PackageView /></React.Suspense>} />
              <Route path='canteenallbookings' element={<React.Suspense fallback={<LoadingPage />}><CanteenAllBookings /></React.Suspense>} />
              <Route path='jwtsessionexpiredcanteen' element={<React.Suspense fallback={<LoadingPage />}><CanteenJwtReminder /></React.Suspense>} />
              <Route path='dashboard' element={<React.Suspense fallback={<LoadingPage />}><DashBoard /></React.Suspense>} />
            </Route>
            {/* ----------------------------//canteen_layout_ends---------------------------------------- */}


            <Route path='*' element={<PageNotFound />} />


          </Routes>

        </ErrorBoundaryHandle>
      </Router>

    </>

  )
}

export default App
