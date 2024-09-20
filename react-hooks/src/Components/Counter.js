import React, { useMemo, useState } from 'react'
import Button from './Button'

export default function Counter() {
    const [counter, setcounter] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)
    const incrementOne=()=>{

         setcounter(counter + 1)
    }
    const incrementTwo=()=>{

         setcounterTwo(counterTwo + 1)
    }

   const isEven = useMemo(() =>{
    let i = 0;
    while(i < 2000000000) i++
     return counter % 2 === 0
},[counter])
  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count One - {counter}</button>
            <span>{isEven ? "even": 'odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            {/* <span>{isEven() ? "even": 'odd'}</span> */}
        </div>
    
    </div>
  )
}
