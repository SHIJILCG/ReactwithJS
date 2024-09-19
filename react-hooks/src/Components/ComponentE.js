import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { ChannelContext, userContext } from '../App'
export default function ComponentE() {
   const user= useContext(userContext)
   const channel = useContext(ChannelContext)
  return (
    <div className='border-2 border-black m-2'>ComponentE
      {user} - {channel}
        <ComponentF />
    </div>
  )
}
