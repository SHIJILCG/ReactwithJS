import React, { createContext, useState } from 'react'
// import { MemoizedChilA } from './ContextChilds'
// import ContextChilds from './ContextChilds'
// import {ChildA} from './ContextChilds'
export const CountContext = createContext()

export default function ContextParent({children}) {
    const [count, setcount] = useState(0)

    console.log('ContextParent Render')
  return (
    <div>
      <button onClick={()=> setcount(PrevCount=> PrevCount + 1)} className='border-2 border-black m-2 p-1  rounded-lg bg-yellow-600 text-white active:scale-90'> Count - {count}</button>
        <CountContext.Provider value={count}>
              {children}
        </CountContext.Provider>
    </div>
  )
}
