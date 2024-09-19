import React, { Component } from 'react'

export default class ClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    componentDidMount(){
         this.countinterval = setInterval(() => {
             this.setState({
                count: this.state.count + 1
             })
         }, 1000);
    }
    componentWillUnmount(){
         clearInterval(this.countinterval)
    }
  render() {
    return (
      <div>Count:{this.state.count}</div>
    )
  }
}
