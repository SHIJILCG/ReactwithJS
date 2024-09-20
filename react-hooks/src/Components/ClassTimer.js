import React, { Component } from 'react'

 class ClassTimer extends Component {
      intervel
      constructor(props) {
        super(props)
      
        this.state = {
           timer:0
        }
      }
      componentDidMount(){
         this.intervel = setInterval(() => {
             this.setState(PrevState => ({timer:PrevState.timer + 1}))
         }, 1000);
      }
      componentWillUnmount(){
        clearInterval(this.intervel) 
      }
  render() {
    return (
      <div>
         Class Timer:{this.state.timer} 
         <button onClick={()=> clearInterval(this.intervel)}>Click me</button>
      </div>
    )
  }
}

export default ClassTimer