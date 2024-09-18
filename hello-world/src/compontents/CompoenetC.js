import React, { Component } from 'react'
import ComponentD from './ComponentD'

export default class CompoenetC extends Component {
  render() {
    return (
      <div className='border-2 m-2 p-3'>
        CompoenetC
         <ComponentD />
      </div>
    )
  }
}
