import React, { useState } from 'react'

export default function HookCounterfour() {
    const [items, setitems] = useState([])
    const addItem =()=>{
         setitems([...items,{id:items.length,value:Math.floor(Math.random() * 10 ) + 1}])
    }
  return (
    <div>
         <button onClick={addItem} className='border-2 border-black m-1 p-1 rounded-2xl bg-yellow-900 text-white active:scale-90'>Add a number</button>
       <ul>
        {
            items.map(item =>(
                 <li key={item.id} className='inline-block p-1 border-1 border-black '>{item.value},</li>
            ))
        }
       </ul>
    </div>
  )
}
