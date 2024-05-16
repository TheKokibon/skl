import React from 'react';

const CardPeople = (props) => {
  return (
    <div className='p-4 text-[#231F20]'>
      <div className='flex flex-col z-1 bg-[#e9e9e9cf] m-4 rounded-2xl hover:shadow-lg overflow-hidden transition duration-300 transform hover:scale-105'>
        <div className='bg-[#e9e9e9c9] relative'>
          <img
            src={props.img}
            alt={props.h2}
            className='w-52 h-52 object-contain mx-auto mt-5 p-5 transition duration-300 transform hover:rotate-12'
          />
          <h2 className='text-center text-xl font-black absolute inset-x-0 bottom-0 mb-4'>
            {props.h2}
          </h2>
        </div>
        <div className='flex flex-row justify-between text-center p-4'>
          <ul>
            <h3 className='text-lg font-extrabold'>Debate</h3>
            <li className='p-1'>{props.debate1}</li>
            <li className='p-1'>{props.debate2}</li>
            <li className='p-1'>{props.debate3}</li>
          </ul>
          <ul>
            <h3 className='text-lg font-extrabold'>League of Legends</h3>
            <li className='p-1'>{props.champion1}</li>
            <li className='p-1'>{props.champion2}</li>
            <li className='p-1'>{props.champion3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPeople;
