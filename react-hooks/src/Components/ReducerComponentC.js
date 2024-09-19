import React, { useContext } from 'react'
import { stateContext } from '../App'

export default function ReducerComponentC() {
     const stateContext =useContext(stateContext)
  return (
    <div className='border-2  border-black m-1'>ReducerComponentC
       <div>count:{stateContext.countState}</div>
     <button onClick={stateContext.countDispatch('increment')}>increment</button>
     <button  onClick={stateContext.countDispatch('decrement')}>decerment</button>
     <button  onClick={stateContext.countDispatch('Reset')}>Rest</button>
    </div>
  )
}
