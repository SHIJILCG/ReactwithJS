import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class HoverCounter extends Component {

  render() {
    const {count,incrementcount}=this.props
    return <h1 onMouseOver={incrementcount}>{this.props.name}Hovered {count} times</h1>
         
  }
}
export default WithCounter(HoverCounter,5)