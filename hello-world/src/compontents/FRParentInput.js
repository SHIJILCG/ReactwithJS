import React, { Component } from 'react'
import FRInput from './FRInput'

export default class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.InputRef=React.createRef()
    }
    setInput =()=>{
        this.InputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRInput  ref={this.InputRef}/>
        <button className='border-2 p-2 ' onClick={this.setInput}>FocusInput</button>
      </div>
    )
  }
}
