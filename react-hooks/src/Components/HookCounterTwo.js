import React from 'react'
import { useState } from 'react'
export default function HookCounterTwo() {
     const intialCount=0
     const [count, setcount] = useState(intialCount)
    //  function  ResetTheCount(value){
    //      setcount(count = value)
    //  }
    const incrementFive=() =>{
         for(let i=0;i<5;i++){
             setcount(PrevState => PrevState + 1)
         }
    }
  return (
    <div>
       count:{count}
       <button onClick={()=> setcount(intialCount) } className='border-2 border-black m-1 p-1'>Reset</button>
       <button onClick={()=> setcount(PrevState => PrevState + 1 )}  className='border-2 border-black m-1 p-1'>Increment</button>
       <button onClick={()=> setcount(PrevState => PrevState - 1)} className='border-2 border-black m-1 p-1'>Decrement</button>
       <button onClick={incrementFive} className='border-2 border-black m-1 p-1'>Increment By 5</button>
    </div>              
  )
}
