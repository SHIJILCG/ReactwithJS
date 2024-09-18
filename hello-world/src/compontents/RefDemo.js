import React, { Component } from 'react'

export default class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
      this.cbRef=null
      this.setCbRef=(element)=>{
         this.cbRef = element
      }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.cbRef){
             this.cbRef.focus()
        }
    }
    clickHandler=()=>{
         alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
         <input type='text' ref={this.inputRef} placeholder='Enter Something' className='border-2 border-black m-2'/>
         <input type='text' ref={this.setCbRef} placeholder='Enter Something' className='border-2 border-black m-2'/>
         <button onClick={this.clickHandler} className='border-2 border-black p-1 bg-orange-300'>Click</button>
      </div>
    )
  }
}
