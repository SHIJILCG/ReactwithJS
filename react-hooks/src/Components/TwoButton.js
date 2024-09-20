import React, { useState } from 'react'

export default function TwoButton() {
    const [count, setcount] = useState({button : 0,button1: 0})
    const handleFirstButtonClick =()=>{
        setcount((PrevCount) =>({...PrevCount ,button:PrevCount.button + 1}))
    }
    const handleSecondButtonClick = ()=>{
         setcount((PrevCount) =>({...PrevCount ,button1:PrevCount.button1 + 1}))
    }
  return (
    <div>
           <button onClick={handleFirstButtonClick}>Increase to {count.button}</button>
           <button onClick={handleSecondButtonClick}>Increase by {count.button1}</button>
    </div>
  )
}
