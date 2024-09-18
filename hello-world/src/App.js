// import { PureComponent } from 'react';
import "./App.css";
// import ClickCountertwo from "./compontents/ClickCountertwo";
import CompoenetC from "./compontents/CompoenetC";
// import Countertwo from "./compontents/Countertwo";
// import ClickCounter from './compontents/ClickCounter';
// import HoverCounter from './compontents/HoverCounter';
// import HoverCounterTwo from "./compontents/HoverCounterTwo";
// import User from "./compontents/User";
import { UserProvider } from "./compontents/UserContext";
// import ErrorBundary from './compontents/ErrorBundary';
// import Hero from './compontents/Hero';
// import FocusInput from './compontents/FocusInput';
// import FRParentInput from './compontents/FRParentInput';
// import PortalDemo from './compontents/PortalDemo';
// import PureCompo from './compontents/PureCompo';
// import ParentComponte from './compontents/ParentComponte';
// import RefDemo from './RefDemo';

function App() {
  return (
    <div className="App">
      {/* <ParentComponte /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBundary>
            <Hero HeroName="Batman"/>   
      </ErrorBundary>
      <ErrorBundary>
            <Hero HeroName="Superman" />     
      </ErrorBundary>
      <ErrorBundary>
            <Hero HeroName="Joker"/>      
      </ErrorBundary>
      <ErrorBundary>
         <Hero HeroName="iron man"/>
      </ErrorBundary> */}
      {/* <ClickCounter name="shijil" />
      <HoverCounter /> */}
      {/* <ClickCountertwo /> */}
      {/* <HoverCounterTwo />
      <User render={(isLoggedIN)=> isLoggedIN ?  'shijil' : 'Guest'}/> */}
      {/* <Countertwo
        render={(count, incrementCount) => (
          <ClickCountertwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Countertwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      <UserProvider value="shijil">
          <CompoenetC />
      </UserProvider>
       
    </div>
  );
}
export default App;
