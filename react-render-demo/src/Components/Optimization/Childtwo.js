import React from 'react'

 function Childtwo({name}) {
    console.log('childTwo Render')
  return (
    <div>
        child component {name}
    </div>
  )
}

export default React.memo(Childtwo)
