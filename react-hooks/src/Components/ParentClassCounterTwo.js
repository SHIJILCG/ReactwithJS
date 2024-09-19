import React, { Component } from 'react'
import ClassCounterTwo from './ClassCounterTwo'
// const itemvalue= 10;
export default class ParentClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display:true
      }
    }
    
  render() {
    return (
      <div>
         <button onClick={()=> this.setState(this.state.display ? {display :false} : {display:true})} className='border-2 m-2 p-1  border-black'>Toggle Display</button>
         {this.state.display && <ClassCounterTwo />}
      </div>
    )
  }
}
