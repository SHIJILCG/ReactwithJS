
// import { useReducer } from 'react';
// import React from 'react';
// import './App.css';
// import ReducerComponentA from './Components/ReducerComponentA';
// import ReducerComponentB from './Components/ReducerComponentB';
// import ReducerComponentC from './Components/ReducerComponentC';
// export const Countcontext=React.createContext()
// const initialCount = 0;
// const reducer =(state,action)=>{
//         switch(action){
//            case 'increment':
//               return state + 1
//            case 'decrement':
//               return state - 2
//            case 'reset' :
//               return initialCount
//            default:
//               return state         
//         }

// import ClassTimer from "./Components/ClassTimer";
// import FocusInput from "./Components/FocusInput";
// import CounterOne from "./Components/CounterOne";
// import CounterTwo from "./Components/CounterTwo";
// import TwoButton from "./Components/TwoButton";
import UserForm from "./Components/UserForm";
// import DoctTitleTwo from "./Components/DocTitleTwo";
// import DoctTitleOne from "./Components/DoctTitleOne";
// import HookTImer from "./Components/HookTImer";

// import DataFetchingOne from "./Components/DataFetchingOne";
// import Counter from "./Components/Counter";
// import DataFetchinTwo from "./Components/DataFetchinTwo";
// import ParentComponent from "./Components/ParentComponent";

// }
function App() {
//  const [count, dispatch] = useReducer(reducer,initialCount)
  return (
   <div className="flex justify-center align-middle">
      {/* <Countcontext.Provider value={{countState:count,countDispatch:dispatch}}>
           Count-{count}
            <ReducerComponentA />
            <ReducerComponentB />
            <ReducerComponentC />      
      </Countcontext.Provider> */}
     {/* <DataFetchingOne /> */}
     {/* <DataFetchinTwo /> */}
     {/* <ParentComponent /> */}
     {/* <Counter /> */}
     {/* <FocusInput /> */}
     {/* <ClassTimer /> */}
     {/* <HookTImer /> */}
     {/* <DoctTitleOne /> */}
     {/* <DoctTitleTwo /> */}
     {/* <CounterOne /> */}
     {/* <CounterTwo /> */}
     <UserForm />
     {/* <TwoButton /> */}
   </div>
  )
}


export default App;
