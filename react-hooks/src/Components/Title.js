import React from 'react'

 function Title() {
    console.log("Rendering Title")
  return (
    <div className="flex justify-center align-middle">
       <h2>useCallback Hook</h2>
    </div>
  )
}
 export default React.memo(Title)