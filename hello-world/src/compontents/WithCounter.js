import React from "react";
const WithCounter=(WrappedComponent,incrementNumber)=>{
     class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementcount=()=>{
               this.setState(PrevState =>{
                   return { count:PrevState.count + incrementNumber}
               })
          }
          render(){
             return<WrappedComponent count={this.state.count} incrementcount={this.incrementcount}  {...this.props}/>
          }
     }
     return NewComponent
}
export default WithCounter
