import React, { useEffect, useState } from 'react'
const someProp = 1
export default function IntercvalHook() {
    const [count, setcount] = useState(0);
    useEffect(() => {
        dosomething()
        function dosomething(){
            console.log(someProp)
        }
      const interval=setInterval(tick, 1000);
      return () => {
         clearInterval(interval)
      }
    }, [someProp])
    
    const tick =()=>{
         setcount(PrevState => PrevState + 1)
    }

  return (
    <div>
       {count} value 
    </div>
  )
}
