import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(0);
  const handleNav = () =>{
        setNav(!nav);
  }
  return (
    <div className="text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto">
        <h1 className='w-full text-3xl text-[#00df9a]'>SOURCE.</h1>
        <ul className="flex hidden">
            <li className='p-4' >Home</li> 
            <li className='p-4' >Company</li> 
            <li className='p-4' >Resource</li> 
            <li className='p-4' >About</li> 
            <li className='p-4' >Contact</li> 

        </ul>
        <div onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        {/* <div className='fixed left-0 top-0 w-[60%] h-full border-r-gray-900'> */}
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
           <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SOURCE.</h1>
     
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600' >Home</li> 
            <li className='p-4 border-b border-gray-600' >Company</li> 
            <li className='p-4 border-b border-gray-600' >Resource</li> 
            <li className='p-4 border-b border-gray-600' >About</li> 
            <li className='p-4 border-b border-gray-600' >Contact</li> 

        </ul>
        </div>
    </div>
  )
};
export default Navbar;

