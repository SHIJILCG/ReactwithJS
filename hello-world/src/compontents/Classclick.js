import React, { Component } from 'react'

export default class Classclick extends Component {
    handlclick(){
        console.log("the button is clicked")
    }
  render() {
    return (
      <div>
         <button onClick={this.handlclick}>Click</button>
      </div>
    )
  }
  
}
