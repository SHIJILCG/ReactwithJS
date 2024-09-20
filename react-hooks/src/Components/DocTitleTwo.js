import React, {useState } from 'react'
import UseDocumentTitle from './Hook/UseDocumentTitle'

export default function DoctTitleTwo() {
    const [count, setcount] = useState(0)
    UseDocumentTitle(count)
  return (
    <div>
          <button onClick={()=> setcount(PrevCount => PrevCount + 1)}>Count - {count}</button>
    </div>
  )
}
