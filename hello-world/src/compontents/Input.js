import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
      this.inputRef=React.createRef()
  }
  focusInput(){
     this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
         <input type='text' ref={this.inputRef} className='border-2 m-2'/>
      </div>
    )
  }
}
