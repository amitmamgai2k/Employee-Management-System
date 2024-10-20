import React from 'react'
//ssssssssss
const TaskListNumbers = () => {
  return (
    <div className='flex flex-wrap screen justify-between gap-5  mt-10 '>
        <div className='h-30 w-[40%] bg-blue-600 rounded-xl '>
            <h2 className='text-2xl px-5 py-2 text-white font-bold'>0</h2>
            <h3 className='text-xl px-5 py-2 text-white font-semibold'>New Task</h3>
        </div>
        <div className='h-30 w-[40%] bg-green-600 rounded-xl '>
            <h2 className='text-2xl px-5 py-2  text-white font-bold'>3</h2>
            <h3 className='text-xl px-5 py-2 text-white font-semibold'>Completed</h3>
        </div>
        <div className='h-30 w-[40%] bg-yellow-300 rounded-xl '>
            <h2 className='text-2xl px-5 py-2 text-white font-bold'>0</h2>
            <h3 className='text-xl px-5 py-2 text-white font-semibold'>Accepted</h3>
        </div>
        <div className='h-30 w-[40%] bg-orange-500 rounded-xl '>
            <h2 className='text-2xl px-5 py-2 text-white font-bold'>1</h2>
            <h3 className='text-xl px-5 py-2 text-white font-semibold'>Failed</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
