import React, { useState } from 'react'
//sssssss
const Login =()=> {
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Hello guyss");
        
      }
      setEmail("")
      setPassword("")
  return (
 
    <>
  <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
    <div className='border-2 border-red-600 rounded-lg shadow-lg p-8 bg-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center space-y-6'>
        <input
          type="email"
          value = {email}
          onChange={(e)=>{setEmail(e.target.value)}}

    
          
          placeholder='Enter Your Email'
          className='w-80 p-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
        />
        <input
          type="password"
          value = {password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder='Enter Your Password'
          className='w-80 p-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
        />
        <button className='w-80 p-3 bg-red-600 text-white rounded hover:bg-red-700'>
          Login
        </button>
      </form>
    </div>
  </div>
</>

    
  )
}

export default Login
