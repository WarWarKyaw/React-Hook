import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCouner from './components/HookCouner';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from'./components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">    
      {/* <ClassCounter /> */}
      {/* <HookCouner /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree />
       */}
       {/* <HookCounterFour /> */}
       {/* <ClassCounterOne/> */}
       {/* <HookCounterOne/> */}
       {/* <ClassMouse /> */}
       {/* <HookMouse /> */}
       {/* <MouseContainer /> */}
       {/* <IntervalClassCounter /> */}
       <IntervalHookCounter />
    </div>
  );
}

export default App;
