import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {
             (value)=> <div className='border-2'>{value}ComponentE</div>
        }
      </UserConsumer>
    )
  }
}
