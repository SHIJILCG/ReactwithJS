import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         Topic:'React'
      }
    }
    handlechange=(e)=>{
         this.setState({
             username:e.target.value
             
         })
    }
    handlecomments=(e)=>{
        this.setState({
            comments:e.target.value
            
        })
   }
   changselected=(e)=>{
       this.setState({
          Topic:e.target.value
       })
   }
   submitthedata=(e)=>{
      e.preventDefault()
      alert(`Username:${this.state.username} and your comment is ${this.state.comments} and your Topic is ${this.state.Topic}`)
   }
  render() {
    const {username,comments,Topic}=this.state
    return (
      <form onSubmit={this.submitthedata}>
        <div>
             <label className='uppercase font-sans '> Enter Your Username</label>
             <input type='text' className='border-2 border-black m-2' value={username} onChange={this.handlechange}/>
        </div>
        <div>
           <label>Enter Your Comments Here</label>
           <textarea className='border-2 ' value={comments} onChange={this.handlecomments}></textarea>
        </div>
        <div className='m-4'>
             <label>Topic</label>
             <select value={Topic} onChange={this.changselected}>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
             </select>
        </div>
         <button className='border-2 border-black p-1 bg-red-50 rounded-lg text-red-950'>submit</button>
      </form>
    )
  }
}
