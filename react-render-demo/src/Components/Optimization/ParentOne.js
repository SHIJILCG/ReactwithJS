
import React, { useState } from 'react'
// import Child from './Child'
// import ChildOne from './ChildOne'
// cosnt intialstate=
export default function ParentOne({children}) {
    const [count, setcount] = useState(0)
    console.log('ParentOne Render')
  return (
    <div>
        <button onClick={()=> setcount((c)=> c + 1)} className='border-2 border-black m-1 p-1 '>Count - {count}</button>
        {children}
        {/* <ChildOne /> */}
    </div>
  )
}
