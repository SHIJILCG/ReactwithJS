import React, { useState } from 'react'
export default function useCounter(initialCount =0,value) {
    const [count, setcount] = useState(initialCount)
    const increment =()=>{
        setcount(prevCount => prevCount + value)
   }
   const decrement =()=>{
      setcount(prevCount => prevCount - value)
   }
   const reset=()=>{
        setcount(0)
   }
   return[
        count,increment,decrement,reset
   ]
}
