import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true);
  const toggleSigninForm = ()=>{
        setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
     <Header />
     <div className='absolute top-0 left-0 w-full h-full '>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg" alt="bgimg"className='w-full h-full object-cover' />
     </div>
     <form className=' w-3/12 p-10 bg-black absolute  my-36 mx-auto right-0 left-0 text-white bg-opacity-75' >
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
      
      <input 
        type="text" 
        placeholder='Enter Full Name' 
        className='p-2 my-4 w-full bg-gray-700'
      />
       {
        !isSignInForm && <input 
         type="text" 
         placeholder='Enter Email Id' 
         className='p-2 my-4 w-full bg-gray-700'
       />
       }
      
      <input 
        type="password" 
        placeholder='Password' 
        className='p-2 my-4 w-full bg-gray-700'
      />
      <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg'>
        {isSignInForm ?"Sign In":"Sign Up"}
      </button>
      <p 
        className='p-4 cursor-pointer' 
        onClick={toggleSigninForm}>{isSignInForm ?"New to Netflix sign Up":"Alredy User Sign In"}
      </p>
     </form>
    </div>

  )
}

export default Login
