import React, { useState } from 'react'
import Child from './Child'
// cosnt intialstate=
export default function Parent() {
    const [count, setcount] = useState(0)
    console.log('Parent Render')
  return (
    <div>
        <button onClick={()=> setcount((c)=> c + 1)} className='border-2 border-black m-1 p-1 '>Count - {count}</button>
        <button onClick={()=> setcount(0)} className='border-2 border-black m-1 p-1 '>Count - 0</button>
        <button onClick={()=> setcount(5)} className='border-2 border-black m-1 p-1 '>Count - 5</button>
        <Child />
    </div>
  )
}