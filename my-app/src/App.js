import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a stateful class component" />
    </div>
  );
}

export default App;
