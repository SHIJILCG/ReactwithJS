import React, { useContext } from 'react'
import { Countcontext } from '../App'


export default function ReducerComponentC() {
const countcontext=useContext(Countcontext)
  return (
                 <div className='border-2  border-black m-1'>
                      ReducerComponentC - {countcontext.countState}
                       <button onClick={()=> countcontext.countDispatch('increment')} className='border-2 border-black m-1 p-1 active:scale-90 rounded-md bg-slate-500 text-white'>increment</button>
                       <button onClick={()=> countcontext.countDispatch('decrement')} className='border-2 border-black m-1 p-1 active:scale-90 rounded-md bg-slate-500 text-white'>decrement</button>
                       <button onClick={()=> countcontext.countDispatch('reset')} className='border-2 border-black m-1 p-1 active:scale-90 rounded-md bg-slate-500 text-white'>reset</button>
                       {/* <ReducerComponentB /> */}
                 </div>
  )
}