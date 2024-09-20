import React, { useState } from 'react'

export default function UseState() {
    const [counter, setcounter] = useState(0)
    console.log('usestate Render value',{counter})
  return (
    <div className='border-2 border-black m-2 flex align-middle justify-center21'>
         <button onClick={()=> setcounter(counter + 1)} className='border-2 border-black m-2 p-2 rounded-3xl bg-blue-950 text-white active:scale-90'>Click count-{counter}</button>
         <button onClick={()=> setcounter(0)} className='border-2 border-black m-2 p-2 rounded-3xl bg-blue-950 text-white active:scale-90'>Click count-0</button>
         <button onClick={()=> setcounter(5)} className='border-2 border-black m-2 p-2 rounded-3xl bg-blue-950 text-white active:scale-90'>Click count-5</button>
    </div>
  )
}