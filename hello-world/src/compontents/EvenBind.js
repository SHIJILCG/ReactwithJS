import React, { Component } from 'react'

export default class EvenBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          message:"hello"
      }
      // this.clickhandler=this.clickhandler.bind(this)
    }
    // clickhandler(){
    //      this.setState({
    //         message:"Goodbye"
    //      })
    //     console.log(this)
    // }
    clickhandler=()=>{
       this.setState({
         message:"goodbye"
       })
    }
  render() {
    return (
       <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickhandler}>Click</button > */}
            {/* <button onClick={()=>this.clickhandler()}>Click</button > */}
            {/* <button onClick={this.clickhandler.bind(this)}>Click</button > */}
            <button onClick={this.clickhandler}>Click Me </button >
       </div>
    )
  }
}