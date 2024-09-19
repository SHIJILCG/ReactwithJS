import React, { useState } from 'react'
export default function HookCounterThree() {
    const [Name, setName] = useState({firstName:'',lastName:''})

  return (
    <div>
       <form>
          <input type='text'  value={Name.firstName} onChange={e=> setName({...Name ,firstName: e.target.value})} className='border-2 border-black m-1 flex '/>
          <input type='text'  value={Name.lastName}  onChange={e=> setName({...Name ,lastName: e.target.value})}  className='border-2 border-black m-1 flex '/>
          <h2>Your first name is - {Name.firstName}</h2>
          <h2>Your last name is - {Name.lastName}</h2>
          <h2>{JSON.stringify(Name)}</h2>
       </form>
    </div>
  )
}
