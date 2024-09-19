import React, { useReducer } from 'react'
const intialState = 0

const reducer =(state,action)=>{
      switch(action.type){
         case 'increment':
             return state + 1
         case 'decrement':
             return state  - 1
        //      case 'increment2':
        //      return {...state,secondstate: state.secondstate + action.value}
        //  case 'decrement2':
        //      return state + 1
        case 'Reset':
             return intialState
        default :
            return state        
      }
}


export default function CounterThree() {
  const [state, dispatch] = useReducer(reducer,intialState)
  const [stateTwo, dispatchTwp] = useReducer(reducer,intialState)
  return (
    <div>
        <div>count:{state}</div>
        <button onClick={()=> dispatch({type: 'increment',value: 1})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement',value: 1})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Decrement</button>    
        {/* <button onClick={()=> dispatch({type: 'increment2',value: 5})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Increment 5</button>
        <button onClick={()=> dispatch({type: 'decrement2',value: 5})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Decrement 5</button> */}
        <button onClick={()=> dispatch({type: 'Reset'})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Reset</button>
       <div>count:{stateTwo}</div>
       <button onClick={()=> dispatchTwp({type: 'increment',value: 1})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Increment</button>
       <button onClick={()=> dispatchTwp({type: 'decrement',value: 1})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Decrement</button>    
       {/* <button onClick={()=> dispatch({type: 'increment2',value: 5})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Increment 5</button>
       <button onClick={()=> dispatch({type: 'decrement2',value: 5})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Decrement 5</button> */}
       <button onClick={()=> dispatchTwp({type: 'Reset'})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Reset</button>
   </div> 
 )

}
