import React from 'react'

export default function ChildFive({name}) {
    console.log('childFive Render')
  return (
    <div>
        Hello - {name} 
     </div>
  )
}
export const MemoizedChildFive = React.memo(ChildFive)
