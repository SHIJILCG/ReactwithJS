import React, { Component } from 'react'

export default class ClickCounterClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount(){
         document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(PrevProps,PrevState){
      
       if(PrevState.count !== this.state.count){
          console.log("updating document title")
          document.title = `Clicked ${this.state.count} times`
       }
        
   }
  render() {
    return (
      <div>
         <input type='text' value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} className='border-2 border-black m-2 '/>
         <button onClick={()=> this.setState({count: this.state.count + 1})} className='border-2 border-black m-2 '>Click Here</button>
      </div>
    )
  }
}
