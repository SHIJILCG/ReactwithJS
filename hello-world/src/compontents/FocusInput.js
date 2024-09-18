import React, { Component } from 'react'
import Input from './Input'

export default class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    clickhandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickhandler} className='border-2 '>Focus Input</button>
      </div>
    )
  }
}
