import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class ClickCounter extends Component {
 
  render() {
    const {count,incrementcount}=this.props
    return (
    
        <button onClick={incrementcount} className='border-2 border-black p-1 m-4 rounded-lg bg-slate-400 text-white uppercase'>{this.props.name} Clicked {count} times</button>
      
    )
  }
}
export default WithCounter(ClickCounter,10)