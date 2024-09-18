import React from 'react'

function MemoComponte({name}) {
    console.log("rendering the memocomponte*********")
  return (
    <div>MemoComponte Example {name}</div>
  )
}
export default React.memo(MemoComponte) ;
