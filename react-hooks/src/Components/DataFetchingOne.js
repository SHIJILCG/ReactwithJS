import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function DataFetchingOne() {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [Post, setPost] = useState({})

    useEffect(() => {
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
           .then(response =>{
            // console.log(response.data);
             setloading(false);
             setPost(response.data)
             seterror('')
           })
           .catch(error => {
             setloading(false)
             seterror('something went wrong')
             setPost({})
           })
    }, [])
    
  return (
    <div>
        <h1>{loading ? 'Loading.....': Post.title ? Post.title : error}</h1>
    </div>
  )
}