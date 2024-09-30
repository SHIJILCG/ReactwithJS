import React from 'react'

export default function ChildFour({name}) {
    const date=new Date()
    console.log('ChildFour Render')
  return (
    <div>
        Hello {name}.it is currently {date.getHours()} {date.getMinutes()} {date.getSeconds()}
    </div>
  )
}
export  const  MemoizedChildFour=React.memo(ChildFour)
