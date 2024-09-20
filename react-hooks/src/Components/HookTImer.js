import React, { useEffect, useRef, useState } from 'react'

export default function HookTImer() {
    const [timer, settimer] = useState(0)
    const intervelRef=useRef()
    useEffect(() => {
         intervelRef.current = setInterval(() => {
            settimer(PrevState => PrevState + 1)
        }, 1000);
        return(()=>{
             clearInterval(intervelRef.current)
        })
    }, [])
    
  return (
    <div>
         function counter:{timer}
         <button onClick={()=> clearInterval(intervelRef.current)}>click me</button>
    </div>
  )
}  