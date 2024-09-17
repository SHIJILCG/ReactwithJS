import React, { Component } from 'react'
import ChildComponer from './ChildComponer'

export default class ParentCompontent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(value){
       alert(`Hello ${this.state.parentName},${value}`)
    }
    
  render() {
    return (
      <div>
         <ChildComponer onclickhandler={this.greetparent} />
      </div>
    )
  }
}

