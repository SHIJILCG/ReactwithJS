import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
// import Childtwo from './Childtwo'
// import ChildThree from './ChildThree'
// import Child from './Child'
// import ChildOne from './ChildOne'
// cosnt intialstate=
export default function ParentThree() {
    const [count, setcount] = useState(0)
    const [naem, setnaem] = useState('shijil')
    console.log('ParentThree Render')
  return (
    <div>
        <button onClick={()=> setcount((c)=> c + 1)} className='border-2 border-black m-1 p-1 '>Count - {count}</button>
        <button onClick={()=> setnaem('TRCredcano')} className='border-2 border-black m-1 p-1 '>Chang name</button>
        {/* {children} */}
        {/* <ChildThree name={naem}>
            <h1>Hellow world</h1>
        </ChildThree> */}
        <MemoizedChildFour  name={naem}/>
    </div>
  )
}
