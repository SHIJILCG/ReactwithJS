import React, { useContext } from 'react'
import ReducerComponentC from './ReducerComponentC'
import { Countcontext } from '../App'

export default function ReducerComponentB() {
  const {countDispatch,countState}=useContext(Countcontext)
  return (
    <div className='border-2  border-black m-1'>
    ReducerComponentB - {/* x */}{countState}
     <button onClick={()=> countDispatch('increment')} className='border-2 border-black m-1 p-1 active:scale-90 rounded-md bg-slate-500 text-white'>increment</button>
     <button onClick={()=> countDispatch('decrement')} className='border-2 border-black m-1 p-1 active:scale-90 rounded-md bg-slate-500 text-white'>decrement</button>
     <button onClick={()=> countDispatch('reset')} className='border-2 border-black m-1 p-1 active:scale-90 rounded-md bg-slate-500 text-white'>reset</button>
     {/* <ReducerComponentC /> */}
</div>
  )
}