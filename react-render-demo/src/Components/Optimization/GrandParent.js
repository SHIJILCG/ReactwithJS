import React, { useState } from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

export default function GrandParent() {
    const [Newcount, setNewcount] = useState(0)
  return (
    <div>
         <button onClick={()=> setNewcount(Prevstate => Prevstate + 1)}>GrandParent Count - {Newcount}</button>
         <ParentOne Newcount={Newcount}>
             <ChildOne />
         </ParentOne>
    </div>
  )
}
