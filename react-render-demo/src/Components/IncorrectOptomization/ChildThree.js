import React from 'react'

 function ChildThree({name,children}) {
    console.log('childThree Render')
  return (
    <div>
        child component {name} says {children}
    </div>
  )
}

export default React.memo(ChildThree)
