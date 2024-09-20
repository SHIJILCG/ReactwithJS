import React, { useState } from 'react'
import UseInput from './Hook/UseInput'

export default function UserForm() {
    const [firstName,bindFirstName,resetFirstName]=UseInput('')
    const [lastName,bindLastName,resetLastName]=UseInput('')
    const submithandler = (e)=>{
           e.preventDefault()
           alert(`Hello ${firstName} ${lastName}`)
           resetFirstName()
           resetLastName()
    }

  return (
    <div>
          <form onSubmit={submithandler}>
              <div>
                 <label>First Name:</label>
                 <input {...bindFirstName} type='text'/>
              </div>
              <div>
                 <label>Last Name:</label>
                 <input {...bindLastName} type='text'/>
              </div>
              <button>submit</button>
          </form>
    </div>
  )
  
}
