import React from 'react'
import notifyIcon from "../images/notify.svg";
import nathan from "../images/nathan.webp";
import homeIcon from "../images/home.svg";  

const HamMenu = () => {
  return (
    <div className='bg-white w-2/12 flex flex-col transition-all delay-150'>
         <div className=" relative  lg:hidden">
            <img src={homeIcon} alt="search" className="w-6 " /> <span className='inline-block'>Home</span>

            <img src={notifyIcon} alt="search" className="w-6 " /> Notifications
            {/* <span className="bg-red-500 w-3 rounded-full h-3 absolute left-14 top-1"></span> */}
            <img
              src={nathan}
              alt="search"
              className="w-10 border-2 rounded-full border-red-500"
            /> Profile
          </div>
    </div>
  )
}

export default HamMenu