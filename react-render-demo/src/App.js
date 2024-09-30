// import logo from './logo.svg';
import './App.css';
import { ChildA } from './Components/Context/ContextChilds';
import ContextParent from './Components/Context/ContextParent';
// import ParentFour from './Components/IncorrectOptomization/ParentFour';
// import ParentThree from './Components/IncorrectOptomization/ParentThree';
// import ChildOne from './Components/Optimization/ChildOne'; 
// import Childtwo from './Components/Optimization/Childtwo';
// import GrandParent from './Components/Optimization/GrandParent';
// import ParentOne from './Components/Optimization/ParentOne';
// import ParentTwo from './Components/Optimization/ParentTwo';
// import ArrayUseState from './Components/Immutable State/ArrayUseState';
// import ObjectUseState from './Components/Immutable State/ObjectUseState';
// import Parent from './Components/Parent Child/Parent';
// import UseState from './Components/UseState';
// import UseReducer from './Components/UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
        {/* <UseState /> */}
        {/* <UseReducer /> */}
        {/* <ObjectUseState /> */}
        {/* <ArrayUseState /> */}
        {/* <ParentOne>
             <ChildOne />
         </ParentOne> */}
         {/* <GrandParent /> */}
         {/* <ParentTwo /> */}
         {/* </ParentTwo> */}
         {/* <ParentFour /> */}
         <ContextParent>
            <ChildA />
         </ContextParent>
    </div>
  );
}
export default App;
