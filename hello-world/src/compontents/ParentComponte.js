import React, { Component,PureComponent } from 'react'
// import RegularComponent from './RegularComponent';
// import PureCompo from './PureCompo';
import MemoComponte from './MemoComponte';

export default class ParentComponte extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"shijil"
      }
    }
    componentDidMount(){
         setInterval(() => {
            this.setState({
                 name:"shijil"
            })
         }, 2000);
    }
    
  render() {
    console.log("*************************Parent Compo render ******")
    return (
      <div>
        ParentComponte
        <MemoComponte name={this.state.name} />
        {/* <RegularComponent name={this.state.name} />
        <PureCompo  name={this.state.name} /> */}
      </div>
      
    )
  } 
}
