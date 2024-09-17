import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
     const {name,heroName}=this.props
    //  const {state1,state2}=this.state
    return (
      <h1>Welcome {name} a.k.a {heroName}</h1>
    )
  }
}
