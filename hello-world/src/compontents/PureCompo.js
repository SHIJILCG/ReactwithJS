import React, { PureComponent } from 'react'

export default class PureCompo extends PureComponent {
  render() {
    console.log("Pure compo render")
    return (
      <div>
        PureComponent example {this.props.name}
      </div>
    )
  }
}