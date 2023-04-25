import Header from './Header'
import Personal from './Personal'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Holder = () => {
  return (
    <div>
        <Header />
        <Personal />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Holder