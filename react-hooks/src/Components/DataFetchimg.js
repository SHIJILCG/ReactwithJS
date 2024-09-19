import React, { useDebugValue, useEffect, useState } from 'react'
import axios from 'axios'

let inputstring=''
export default function DataFetchimg() {
    const [posts, setposts] = useState({})
    const [input, setinput] = useState(1)
    const [isclicked, setisclicked] = useState(1)
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts/'+isclicked)
        .then(response =>{
            console.log(response)
              isclicked ? setposts(response.data) : console.log("click the button")
       })
        .catch(error =>{
             console.log(error)
        })
    },[isclicked])
  return (
    <div className='flex-col align-middle justify-center flex'>
         <input type='text' value={input} onChange={(e)=> setinput(e.target.value)} className='border-2 border-black mx-auto w-full max-w-[300px] '/>
         <button onClick={()=> setisclicked(input)} className='border-2 border-black max-w-[90px] mx-auto p-1 rounded-lg bg-yellow-300 text-white mt-1 '>Fetch Post</button>
       <ul>
        {
            //  posts.map(post=>
                 <li key={posts.id} className='border-2 border-black m-1 p-1 justify-center flex'>{posts.title}</li>
            //  )
        }
       </ul>
    </div>
  )
}
