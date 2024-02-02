import React, { useState } from 'react'

function LoginSignup() {

    const [action, setAction] = useState("sign up")
  return (
     <main className='flex justify-center items-center h-[80vh]'>
        <div className='formContainer w-[522px] rounded-[5px] my-[5px]  shadow-3xl   shadow-red-500 p-[40px]'>
        <div className='capitalize underline underline-offset-4 decoration-slate-500 decoration-2 text-center text-xl cursor-default font-bold'>{action}</div>

        {action == "login"?<div></div>:  <div className='userInput my-[5px]'>
        <input type="text" className='p-[7px] px-[30px] rounded-[5px] outline-none w-[100%] mt-4' placeholder='Name' />
        </div>}

        <div className='userInput my-[10px]'>
        <input type="text" className='p-[7px] px-[30px] rounded-[5px] outline-none w-[100%]' placeholder='Email' />
        </div>

        <div className='userInput my-[10px]'>
        <input type="text"  className='p-[7px] px-[30px] rounded-[5px] outline-none w-[100%]' placeholder='Password' />
        </div>

        <div className='userInput my-[10px]'>
        <p>if you forgot password <span className='text-slate-400 cursor-pointer'>click here</span></p>
        </div>

        <div className='flex flex-row justify-center userInput my-[5px] p-[10px]'>
            <div className={action === "login"?"submit capitalize cursor-default bg-blue-700 w-[90px] p-[5px] flex justify-center items-center rounded-[5px] mx-[20px]":"submit capitalize cursor-default border border-slate-700 w-[90px] p-[5px] flex justify-center items-center rounded-[5px] mx-[20px]"} onClick={() => {
            setAction("login")
            }}>login</div>

            <div className={action === "sign up"?"submit capitalize cursor-default bg-blue-700 w-[90px] p-[5px] flex justify-center items-center rounded-[5px] mx-[20px]":"submit capitalize cursor-default border border-slate-700 w-[90px] p-[5px] flex justify-center items-center rounded-[5px] mx-[20px"} onClick={()=>{
            setAction("sign up")
            }}>sign up</div>
            </div>
        </div>
     </main>
    
  )
}

export default LoginSignup