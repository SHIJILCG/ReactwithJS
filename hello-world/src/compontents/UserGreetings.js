import React, { Component } from 'react'

export default class UserGreetings extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           isLoggedIn:false
       }
     }
     
  render() {
    // if(this.state.isLoggedIn){
    //      return (<div><h1>Welcome Shijil CG</h1></div>)
    // }else{
    //     return (<div><h1>Welcome Guest</h1></div>)
    // }
    // let message = this.state.isLoggedIn ? 'Hello Shijil' : 'Hello Guest'
    //  return(
    //              <div><div>
    //                {this.state.isLoggedIn && 'Hello Shijil'}
    //              </div></div>
    //         )
    //  }
    return this.state.isLoggedIn && <div>{"Hello Shijil"}</div>
  }
}