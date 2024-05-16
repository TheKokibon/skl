import React from 'react';

export const PricingCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#CCCCCC] text-center text-[#0E79B2] p-10 m-4 rounded-xl w-96 h-fit border border-[#96705B]'>
      <div className='mb-4'>
        <h1 className='text-2xl font-black'>{props.h1}</h1>
        <h2 className='text-xl font-bold'>{props.h2}</h2>
      </div>
      <div>
        <ul>
          <li className='font-semibold  '>{props.of1}</li>
          <li className='font-semibold  '>{props.of2}</li>
          <li className='font-semibold  ' >{props.of3}</li>
        </ul>
        <a href="https://www.youtube.com/watch?v=E6zDMdInW9I" target="_blank" rel="noopener noreferrer">
        <button className='bg-[#231F20] rounded-xl p-2 m-2 text-[#89C9B8] font-bold'>Pay up</button>

        </a>
      </div>
    </div>
  );
};
