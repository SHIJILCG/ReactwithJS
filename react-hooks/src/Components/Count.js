import React from 'react'

 function Count({text,count}) {
    console.log(`Rendering ${text}`)
  return (
    <div className="flex justify-center align-middle">
        {text} - {count}
    </div>
  )
}

export default React.memo(Count)
