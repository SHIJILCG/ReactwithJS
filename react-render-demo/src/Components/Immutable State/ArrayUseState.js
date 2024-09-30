import React, { useState } from 'react'

const intialstate =['Bruce','Wayne']

export default function ArrayUseState() {
    const [name, setname] = useState(intialstate)
    const handleClick =()=>{
        const newArray =[...name,'clark','kent']
         setname(newArray)
    }
    console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick} className='border-2 border-black'>Click</button>
      {
         name.map(na=>(
             <div key={na}>{na}</div>
         ))
      }
    </div>
  )
}