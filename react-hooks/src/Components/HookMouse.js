import React, { useEffect, useState } from 'react'

export default function HookMouse() {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const logMousePosition =(event)=>{
        console.log("mouseevent")
        setx(event.clientX);
        sety(event.clientY) 
    }
    useEffect(() => {
      console.log('useeffect called')
       window.addEventListener('mousemove',logMousePosition)
       return ()=>{
         console.log("component unmount code");
         window.removeEventListener('mousemove',logMousePosition)
       }
    },[])
    
  return (
    <div>
        Hooks X -{x} Y - {y}
    </div>
  )
}
