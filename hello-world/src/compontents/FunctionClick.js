import React from 'react'

export default function FunctionClick() {
     function clickhandler(){
         console.log("button clicked")
     }
  return (
    <div>
        <button onClick={clickhandler}>Click</button>
    </div>
  )
}
