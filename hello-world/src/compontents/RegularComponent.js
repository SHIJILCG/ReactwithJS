import React, { Component } from 'react'

export default class RegularComponent extends Component {
  render() {
    console.log("Regular comp render")
    return (
      <div>RegularComponent Example {this.props.name}</div>
    )
  }
}
