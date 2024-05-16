import React from 'react'
import logo from '../assets/icon.png';

const Footer = () => {
    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className='flex justify-center items-center h-24 w-full mx-auto px-4 text-[#89C9B8]'>
        <img src={logo} alt="" className='w-12 h-12'/>
        <ul className='hidden md:flex'>
        <li className='p-4  text-lg text-[#89C9B8]' onClick={() => handleSmoothScroll('about')}>About</li>
        <li className='p-4 text-lg text-[#89C9B8]' onClick={() => handleSmoothScroll('success')}>Success</li>
        <li className='p-4 text-lg text-[#89C9B8]' onClick={() => handleSmoothScroll('pricing')}>Pricing</li>
        <li className='p-4 text-lg text-[#89C9B8]' onClick={() => handleSmoothScroll('contact')}>Contact</li>
      </ul>
    </div>
  )
}
export default Footer;