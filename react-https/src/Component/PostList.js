import React, { Component } from 'react'
import axios from 'axios'


export default class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          posts:[],
          errorMsg:''
      }
    }
   componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response =>{
            console.log(response.data)
            this.setState({posts:response.data})
        })
        .catch(error =>{
             console.log(error)
             this.setState({errorMsg :'Error retreiving data'})
        })
   } 
  render() {
    const {posts,errorMsg}=this.state
    return (
      <div>
        List of Posts
        {
            posts.length ? posts.map(post => <div key={post.id} className='border-2 border-black m-2 p-2 flex text-center '>{post.title}</div>) :  errorMsg
        }
      </div>
    )
  }
}
