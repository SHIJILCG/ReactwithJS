import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
const  intalstate={
     Post:{},
     error:'',
     loading:true
}
const reducer=(state,action)=>{
     switch(action.msg){
        case 'success':
           return {
              loading:false,
              posts:action.data,
              error:''
           }
        case 'error':
            return {
                loading:false,
                posts:action.data,
                error:'something went wrong!'
               
     }
}
}
export default function DataFetchinTwo() {
    const [state, dispatch] = useReducer(reducer,intalstate)
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
       .then(response =>{
            dispatch({msg:'success',data:response.data})
            // console.log(response.data)
       })
       .catch(error =>{
          dispatch({msg:'error',data:{}})
       })
    }, [])
    
  return (
    <div>
         <h1>{state.loading ? 'Loading.....': state.posts.title ? state.posts.title : state.error}</h1>
         <div></div>
    </div>
  )
}
