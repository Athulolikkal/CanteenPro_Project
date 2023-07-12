import Banner from '../../Components/User/Banner/Banner'
import OurAssets from '../../Components/User/OurAssets/OurAssets'
import PackagesList from '../../Components/User/PackagesList/PackagesList'
import Footer from '../../Components/User/Footer/Footer'
import GetStarted from '../../Components/User/GetStarted/GetStarted'
import Navbar from '../../Components/User/Navbar/Navbar'

const LandingPage = () => {
  return (
    <div> 
    <Navbar />
    <Banner />
    <OurAssets />
    <PackagesList />
    <GetStarted />
    <Footer />
</div>
  )
}

export default LandingPage