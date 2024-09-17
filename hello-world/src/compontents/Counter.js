import React, { Component } from 'react'

export default class extends Component {
        constructor(){
             super()
             this.state={
                 counter:0
             }
        }
     handlechange(){
        //  this.setState({
        //        counter:this.state.counter + 1
        //  },()=>{console.log("Call back value",this.state.counter)})
         this.setState((PrevState)=>({
               counter:PrevState.counter + 1
         }))
     }
     incrementFive(){
        this.handlechange()
     }   
  render() {
    return (
      <div>
          <h1>Counter -{this.state.counter}</h1>
          <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
