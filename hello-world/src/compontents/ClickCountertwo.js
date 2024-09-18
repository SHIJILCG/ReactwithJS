import React, { Component } from 'react'

export default class ClickCountertwo extends Component {
  render() {
    const {count,incrementcount}=this.props
    return (
      <button onClick={incrementcount} className='border-2 border-black m-3 p-2 active:scale-90'>Clicked {count} times</button>
    )
  }
  
}
