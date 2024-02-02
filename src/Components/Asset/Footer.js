import React from 'react';

function Footer() {
  return (
  <footer className='bg-slate-800 absolute right-0 left-0 bottom-0 flex flex-col items-center justify-center p-[10px]'>
   <div className='flex flex-row items-center'>
    <h2 className='mx-[2px] uppercase text-[9px] flex justify-center items-center'>
            new 
            <span className='text-red-500 mr-1'>
            App
            </span>
            <span className='mr-1'>&copy;</span>
            <span>2024</span>
        </h2>
   </div>
  </footer>
  )
}

export default Footer