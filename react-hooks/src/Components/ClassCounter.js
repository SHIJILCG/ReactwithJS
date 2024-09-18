import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
         this.setState({
             count:this.state.count + 1
         })
    }
  render() {
    const{count}=this.state
    return (
      <div>
           <button onClick={this.incrementCount} className='border-2 border-black m-3 p-3 rounded-xl bg-blue-500 text-white active:scale-90'>Clicke {count} times</button>
      </div>
    )
  }
}
