import React, { Component } from 'react'
import LifecycleB from './compontents/LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'shijil'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getaDerivedFromProps')
        return null
    }
    componentDidMount(){
         console.log(`LifecycleA componentDidMount`)
    }
    shouldComponentUpdate(){
       console.log('LifeCycleA shouldcomponentupdate')
       return true
    }
    getSnapshotBeforeUpdate(){
       console.log('LifecycleA getsnapshotBeforeUpdate')
       return null
    }
    componentDidUpdate(){
        console.log('LifecycleA compontentDidUpdate')
    }
    changestate =() =>{
       this.setState({
          name:'The Iron Man'
       })
    }
  render() {

        console.log('LifecycleA render');
       return  (
        <div>
           <div>Lifecycle A</div>
           <button onClick={this.changestate} className='border-2 border-black'>Change state</button>
           <LifecycleB />
        </div>
            
       )   
  }
}
export  default LifecycleA