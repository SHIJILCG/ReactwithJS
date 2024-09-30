import React, { useState,useMemo,useCallback} from 'react'
// import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildFive } from './ChildFive'
// import Childtwo from './Childtwo'
// import ChildThree from './ChildThree'
// import Child from './Child'
// import ChildOne from './ChildOne'
// cosnt intialstate=
export default function ParentFour() {
    const [count, setcount] = useState(0)
    const [naem, setnaem] = useState('shijil')
    const person ={
        fname:'Shijil',
        lname:'C G'
    }
    const memoizedPerson=useMemo(() => person, [])
    const handleclick = () =>{}
    const memoizedHadleClick = useCallback(handleclick,[])
    console.log('ParentFour Render')
  return (
    <div>
        <button onClick={()=> setcount((c)=> c + 1)} className='border-2 border-black m-1 p-1 '>Count - {count}</button>
        <button onClick={()=> setnaem('TRCredcano')} className='border-2 border-black m-1 p-1 '>Chang name</button>
        {/* {children} */}
        {/* <ChildThree name={naem}>
            <h1>Hellow world</h1>
        </ChildThree> */}
        <MemoizedChildFive  name={naem} handleclick={memoizedHadleClick}/>
    </div>
  )
}