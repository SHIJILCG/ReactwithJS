import React,{useReducer} from 'react'
const intialstate = 0
const reducer =(state,action)=>{
      switch(action){
          case 'increment':
            return state + 1
          case 'decrement':
            return state - 1
          case 'restart':
             return intialstate
          default:
            return state       
      }
}
export default function UseReducer() {
   const [state, dispatch] = useReducer(reducer,intialstate)
   console.log("usereducer render ",{state})
  return (
    <div>
           count -{state}
            <button onClick={()=> dispatch('increment')} className='border-2 border-black m-2 p-1 rounded-xl bg-blue-400 active:scale-90'>Increment</button>
            <button onClick={()=> dispatch('decrement')} className='border-2 border-black m-2 p-1 rounded-xl bg-blue-400 active:scale-90'>Decrement</button>
            <button onClick={()=> dispatch('restart')} className='border-2 border-black m-2 p-1 rounded-xl bg-blue-400 active:scale-90'>Restart</button>
    </div>
  )
}
