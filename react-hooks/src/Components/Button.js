import React, { memo } from 'react'

function Button({handlClick,children}) {
    console.log('Rendering button -',children)
  return (
    <button onClick={handlClick} className="flex justify-center align-middle">{children}</button>
  )
}
export default  React.memo(Button)