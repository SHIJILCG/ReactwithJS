import React, { useState } from 'react'
import Childtwo from './Childtwo'
// import Child from './Child'
// import ChildOne from './ChildOne'
// cosnt intialstate=
export default function ParentTwo() {
    const [count, setcount] = useState(0)
    const [naem, setnaem] = useState('shijil')
    console.log('ParentTwo Render')
  return (
    <div>
        <button onClick={()=> setcount((c)=> c + 1)} className='border-2 border-black m-1 p-1 '>Count - {count}</button>
        <button onClick={()=> setnaem('TRCredcano')} className='border-2 border-black m-1 p-1 '>Chang name</button>
        {/* {children} */}
        <Childtwo name={naem} />
    </div>
  )
}