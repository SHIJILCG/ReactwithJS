
import './App.css';
// import React, { createContext, useReducer } from 'react';
// import ReducerHookCount from './Components/ReducerHookCount';
// import CounterThree from './Components/CounterThree';
// import ReducerComponentA from './Components/ReducerComponentA.js';
// import ReducerComponentB from './Components/ReducerComponentB.js';
// import ReducerComponentC from './Components/ReducerComponentC.js';
// import ComponentC from './Components/ComponentC';
// import ClassCounterTwo from './Components/ClassCounterTwo';
// import DataFetchimg from './Components/DataFetchimg';
// import IntercvalHook from './Components/IntercvalHook';
// import ParentClassCounterTwo from './Components/ParentClassCounterTwo';
// import ClassMouse from './Components/ClassMouse';
// import ClickCounterClass from './Components/ClickCounterClass';
// import HookCounter from './Components/HookCounter';
// import HookCounterfour from './Components/HookCounterfour';
// import HookCounterOne from './Components/HookCounterOne';
// import HookMouse from './Components/HookMouse';
// import MouseContainer from './Components/MouseContainer';
// import HookCounterThree from './Components/HookCounterThree';
// import HookCounterTwo from './Components/HookCounterTwo';
// export const userContext = React.createContext()
// export const ChannelContext = React.createContext()
      const statecontext= React.createContext()
const intialvalue = 0
const reducer =(state,action)=>{
     switch(action){
       case 'increment':
          return state + 1
        case 'increment':
          return state  -1 
        case 'reset':
           return intialvalue 
         default:
           state   
     }
}
function App() {
  const [state, dispatch] = useReducer(reducer,intialvalue)
  return (
   <div>
   
  {/* <HookCounter />
  <HookCounter color="red"/> */}
  {/* <HookCounterTwo /> */}
  {/* <HookCounterThree /> */}
  {/* <HookCounterfour /> */}
  {/* <ClickCounterClass /> */}
  {/* <HookCounterOne /> */}
  {/* <ClassMouse /> */}
  {/* <ClassMouse /> */}
  {/* <HookMouse /> */}
  {/* <MouseContainer /> */}
  {/* <ClassCounterTwo /> */}
  {/* <ParentClassCounterTwo /> */}
  {/* <IntercvalHook /> */}
    {/* <DataFetchimg /> */}
       {/* <userContext.Provider value={"shijil"}>
         <ChannelContext.Provider value={"TRCredcano"}>
                 <ComponentC  />
          </ChannelContext.Provider> 
       </userContext.Provider> */}
       {/* <ReducerHookCount /> */}
       {/* <CounterThree /> */}
       {/* <ReducerComponentA /> */}
       <stateContext.Provider value={{countState: state,countDispatch: dispatch}}>
              <ReducerComponentA />
              <ReducerComponentB />
              <ReducerComponentC />
       </stateContext.Provider>
    
   </div>
  );
}


export default App;
