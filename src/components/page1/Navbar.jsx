import React from 'react'
import profileImg from '../../assets/profile-kimi.png';
const Navbar = () => {
  return (
    <div className='main '>
        <div className="nav h-15 bg-slate-700 flex items-center justify-around p-4 ">
            <div className="leftNav w-[20%] mr-[50px]">
                <ul className='flex flex-row text-[#b4b4b4] gap-6 mr-11 '>
                    <li className='cursor-pointer'>Menu</li>
                    <li className='cursor-pointer'>Live</li>
                    <li className='cursor-pointer'>Documentation</li>
                </ul>
            </div>
            <div className="rightNav ml-[auto] ">
                <ul className='flex flex-row items-center text-[#b4b4b4] gap-6'>
                    <li className='cursor-pointer'>Search</li>
                    <li className='cursor-pointer'>Alert</li>
                    <li className='cursor-pointer'>Message</li>
                    <li className='cursor-pointer'>
                        <img src={profileImg} alt="Profile" className='h-11 w-12 rounded-full ' />
                    </li>
                    <li className='cursor-pointer'>Kimi Antaloni</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
