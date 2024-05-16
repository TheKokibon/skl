import React from 'react'

 const Form = () => {
  return (
    <div className='flex flex-col text-center p-4 m-4  h-1/2 gap-10 rounded-xl bg-[#96705B] border border-x-2 border-[#cccccc]'>
        <h2 className='text-2xl font-bold text-[#89C9B8]'>Form</h2>
        <div className='flex flex-row gap-1'>
            <div className='flex flex-col p-2 m-2 text-left'>
            <label htmlFor=""className='text-[#89C9B8] font-semibold'>First name</label>
            <input type="text"  className='rounded-lg'/>
            </div>
        
        <div className='flex flex-col p-2 m-2 text-left'>
        <label htmlFor=""className='text-[#89C9B8] font-semibold'>Last name</label>
        <input type="text"  className='rounded-lg'/>
        </div>
       
        </div>
       
        <div className='flex flex-col p-2 m-2 text-left'>
        <label htmlFor=""className='text-[#89C9B8] font-semibold'>Email</label>
        <input type="text"  className='rounded-lg'/>
        </div>

        <div className='flex flex-col p-2 m-2 text-left'>
        <label htmlFor=""className='text-[#89C9B8] font-semibold'>Message</label>
        <textarea name="message" className='col-3 rounded-lg'></textarea>
        </div>
        <a href="https://www.youtube.com/watch?v=s4pJOsXi6TY" target="_blank" rel="noopener noreferrer">
        <button className=' rounded-xl p-2 m-2 w-fit self-center bg-[#231F20] text-[#89C9B8]'>Send Message</button>
        </a>

        
    </div>
  )
}

export default Form;
