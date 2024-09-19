import React, { useReducer } from 'react'
const intialState = {
     firststate : 0,
     secondstate: 10
};
const reducer =(state,action)=>{
      switch(action.type){
         case 'increment':
             return {...state ,firststate: state.firststate + action.value}
         case 'decrement':
             return {...state,firststate: state.firststate - action.value}
             case 'increment2':
             return {...state,secondstate: state.secondstate + action.value}
         case 'decrement2':
             return {...state,secondstate: state.secondstate - action.value}
        case 'Reset':
             return intialState
        default :
            return state        
      }
}
export default function ReducerHookCount() {
    const [state, dispatch] = useReducer(reducer,intialState)
  return (
    <div>
        <div>count:{state.firststate} count:{state.secondstate}</div>
        <button onClick={()=> dispatch({type: 'increment',value: 1})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement',value: 1})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Decrement</button>    
        <button onClick={()=> dispatch({type: 'increment2',value: 5})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Increment 5</button>
        <button onClick={()=> dispatch({type: 'decrement2',value: 5})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Decrement 5</button>
        <button onClick={()=> dispatch({type: 'Reset'})} className='border-2 border-black m-1 p-1 rounded-lg active:scale-90 '>Reset</button>
    </div> 
  )
}

// console.log("the page is loaded")
