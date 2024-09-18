import React, { Component } from 'react'
import axios from 'axios'
export default class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:'',
      }
    }

    changeHandler =(event)=>{
         this.setState({
            [event.target.name]:event.target.value,
         })
    }
    submithandler =(e)=>{
         e.preventDefault()
        //  console.log(this.state)
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
          .then(response => console.log(response))
          .catch(error =>{
             console.log(error)
          })
    }
  render() {
    const {userid,tittle,body}=this.state
    return (
      <div>
        <form onSubmit={this.submithandler}>
            <div>
                <input type='text' name='userId'  value={userid} onChange={this.changeHandler} className='border-2 border-black m-1 '/>
            </div>
            <div>
                <input type='text' name='title'  value={tittle} onChange={this.changeHandler} className='border-2 border-black m-1 '/>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.changeHandler} className='border-2 border-black m-1 '/>
            </div>
            <button type='submit' className='border-2 border-black m-2  bg-orange-600'>Submit</button>
        </form>
      </div>
    )
  }
}
