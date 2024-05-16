import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import sisi from '../assets/sisi.png'


 const Main = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-3/4 p-6 bg-[#231F20]'>
         <TypeAnimation
    sequence={[
   
        'STAY HUNGRY', 1000, 
        'STAY FOOLISH', 1000,
    ]}
    speed={30}
    style={{ fontSize: '1.5em', color: "#89C9B8", textAlign: "center"}}
    repeat={Infinity}
/>
    <img src={sisi} alt="Sizif" className='h-full w-auto' />
   
    </div>


  )
}

export default Main;

