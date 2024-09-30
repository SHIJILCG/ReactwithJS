import React, { useContext } from 'react'
import { CountContext } from './ContextParent';

export const ChildA = ()=> {
  console.log("child A Render");
  return (
    <div className='border-2 border-black m-1 p-1 '>ChildA
      <ChildB />
    </div>
  )
}
export const MemoizedChilA = React.memo(ChildA)

export const ChildB = ()=> {
  console.log("child B Render");

  return (
    <div className='border-2 border-black m-1 p-1 '>ChildB
      <ChildC />
    </div>
  )
}

export const ChildC = ()=> {
  console.log("child C Render");
 const count=useContext(CountContext)
  return (
    <div className='border-2 border-black m-1 p-1 '>ChildC {count}</div>
  )
}
