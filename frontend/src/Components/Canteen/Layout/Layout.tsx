import {Outlet} from 'react-router-dom'
import Header from '../CanteenHeader/Sidebar'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout