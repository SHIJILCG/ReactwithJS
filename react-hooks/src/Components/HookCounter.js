import React, { useState } from 'react'

export default function HookCounter() {
    const [count, setcount] = useState(0)
  return (
    <div className='border-2 m-2  border-black flex align-middle justify-center text-center '>
        <button onClick={()=>{setcount(count + 1)}} className='border-2 border-violet-500 p-2  m-3 bg-violet-500 text-white uppercase rounded-lg active:scale-90 shadow-xl '>Clicked {count} times</button>
        <button onClick={()=>{setcount(count + 1)}} className='border-2 border-violet-500 p-2  m-3 bg-violet-500 text-white uppercase rounded-lg active:scale-90 shadow-xl '>Clicked {count} times</button>
    </div>
  )
}
