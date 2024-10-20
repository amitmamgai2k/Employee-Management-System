import React from 'react'
//ssss
const Header = () => {
  return (
    <div className=' flex items-end justify-between'>
      <h1 className='text-2xl text-white font-medium'>Hello <br/><span className='text-3xl font-semibold'>Amit</span> 👋  </h1>
      <button className='bg-red-500 font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
