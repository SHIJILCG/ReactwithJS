import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext'

export default class ComponentD extends Component {
    static contextType=UserContext
  render() {
    return (
      <div className='border-2 m-2 p-3'>
        ComponentD context {this.context}
        <ComponentE />
      </div>
    )
  }
}
