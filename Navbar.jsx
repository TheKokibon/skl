import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/icon.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-[#89C9B8] bg-[#231F20] border-b border-b-[#CCCCCC]'>
      <img src={logo} alt="Logo" className='h-12 w-12 ' />
      <ul className='hidden md:flex'>
        <li className='p-4  text-lg' onClick={() => handleSmoothScroll('about')}>About</li>
        <li className='p-4 text-lg' onClick={() => handleSmoothScroll('success')}>Success</li>
        <li className='p-4 text-lg' onClick={() => handleSmoothScroll('pricing')}>Pricing</li>
        <li className='p-4 text-lg' onClick={() => handleSmoothScroll('contact')}>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className={`z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#231F20] ease-in-out duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={logo} alt="Logo" className='h-12 w-12 m-7 ' />
        <ul className='p-4'>
          <li className='p-4 text-lg border-b border-gray-600' onClick={() => { handleNav(); handleSmoothScroll('about'); }}>About</li>
          <li className='p-4 text-lg border-b border-gray-600' onClick={() => { handleNav(); handleSmoothScroll('success'); }}>Success</li>
          <li className='p-4 text-lg border-b border-gray-600' onClick={() => { handleNav(); handleSmoothScroll('pricing'); }}>Pricing</li>
          <li className='p-4 text-lg ' onClick={() => { handleNav(); handleSmoothScroll('contact'); }}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
