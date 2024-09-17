
import React from 'react'

export default function Person({person}) {
   
  return (
        //  <h2>
        //     About Me,
        //     I am {person.name}.I am {person.age} years old.I know {person.skill}
        //  </h2>
    <h2 className='border-2 m-3 border-black p-2  caret-red-600 bg-red-300 rounded-lg inline-block'>
        About Me,
        I am {person} and i Know The React
     </h2>
  )
}
