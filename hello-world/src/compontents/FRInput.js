import React from 'react'

// export default function FRInput() {
//   return (
//     <div>
//         <input  type='text' className='border-2 m-4'/>
//     </div>
//   )
// }

// import React from 'react'
const FRInput = React.forwardRef(
    (props,ref) => {
        return (
          <div>
              <input type='text'  className='border-2 m-4' ref={ref}/>
          </div>
        )
      }
)  
export default FRInput