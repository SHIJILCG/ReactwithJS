import React from 'react'

 function ChildComponer(props){
  return (
    <div>
         <button onClick={()=>props.onclickhandler('child')} >Greetparent</button>
    </div>
  )
}
export  default ChildComponer