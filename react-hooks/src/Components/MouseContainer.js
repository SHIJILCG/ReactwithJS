import React, { useState } from 'react'
// import HookCounter from './HookCounter'
import HookMouse from './HookMouse'

export default function MouseContainer() {
    const [display, setdisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setdisplay(!display)} className='border-2 border-black m-2 p-1'>Toggle display</button>
        {display && <HookMouse />}
    </div>
  )
}

