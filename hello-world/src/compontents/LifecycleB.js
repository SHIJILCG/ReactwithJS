import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'shijil'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getaDerivedFromProps')
        return null
    }
    componentDidMount(){
         console.log(`LifecycleB componentDidMount`)
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldcomponentupdate')
        return true
     }
     getSnapshotBeforeUpdate(){
        console.log('LifecycleB getsnapshotBeforeUpdate')
        return null
     }
     componentDidUpdate(){
         console.log('LifecycleB compontentDidUpdate')
     }
  render() {
    
        console.log('LifecycleB render');
       return  <div>Lifecycle B is showerd here</div>
    
  }
}

export default LifecycleB