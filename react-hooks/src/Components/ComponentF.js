import React, { useContext } from 'react'
import { userContext,ChannelContext} from '../App'

export default function ComponentF() {
    const user= useContext(userContext)
     const channel=useContext(ChannelContext)
  return (
     <div className='border-2 border-black m-1'>
        {/* <userContext.Consumer>
        {
            name =>{
                return( 
                    <ChannelContext.Consumer>
                         {
                            secondname=>{
                                //  return <div>user context value {name} secondname {secondname}</div>
                            }
                         }
                    </ChannelContext.Consumer>
                )
            }
        }
    </userContext.Consumer> */}
     user context name is {user} gamename is {channel} 
     </div>
  )
}
