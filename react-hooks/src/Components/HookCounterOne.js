import React, { useEffect, useState } from 'react'

export default function HookCounterOne() {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')
    useEffect(() => {
        console.log("updating document title")
      document.title = `you clicked ${count} times `

    },[count])
    
  return (
    <div>
         <input type='text' value={name} onChange={(e)=> setname(e.target.value)} className='border-2 border-black  m-2'/>
         <button onClick={()=> setcount(count + 1)} className='border-2 m-3  p-1  border-black'>Clicked {count} times</button>
         <div>{name}</div>
    </div>
  )
  
}
