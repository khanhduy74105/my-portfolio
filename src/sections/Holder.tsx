import {useRef,useEffect} from 'react'
import Header from './Header'
import Personal from './Personal'
import { Outlet } from 'react-router-dom'
const Holder = () => {
  return (
    <div>
        <Header />
        <Personal />
        <Outlet />
        <div className="h-screen bg-white"></div>
    </div>
  )
}

export default Holder