import React from 'react';

function NavBar() {
  return (
    <div className='p-2 flex items-center  text-center'>
        <h1 className='mx-10 uppercase'>
          <span className='text-[18px]'>new</span>
          <span className='text-red-500 text-[14px]'>
            App
          </span>
        </h1> 
        <ul className='flex flex-row justify-center items-center w-[100%]'>
            <li className='capitalize border p-[3px] px-[20px] rounded-[5px] border-slate-700 ml-auto'>home</li>
            <li className='capitalize mx-3 border p-[3px] px-[20px] rounded-[5px] border-slate-700'>about</li>
            <li className='capitalize mx-3 border p-[3px] px-[20px] rounded-[5px] border-slate-700'>Builders</li>
        </ul>
    </div>
  )
}

export default NavBar