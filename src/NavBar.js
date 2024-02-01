import React from 'react';

function NavBar() {
  return (
    <div className='bg-gray-950 p-2 text-center'>
        <h1 className='mx-10 uppercase'>newApp</h1>
        <div className='bg-slate-700 h-px mt-2 mb-2'></div>
        <ul className='flex flex-row justify-center items-center'>
            <li className='capitalize border p-[3px] px-[20px] rounded-[5px] border-slate-700'>home</li>
            <li className='capitalize mx-5 border p-[3px] px-[20px] rounded-[5px] border-slate-700'>about</li>
            <li className='capitalize mx-5 border p-[3px] px-[20px] rounded-[5px] border-slate-700'>Builders</li>
        </ul>
    </div>
  )
}

export default NavBar