import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCouner from './components/HookCouner';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCouner /> */}
      <HookCounterTwo />
    </div>
  );
}

export default App;
