import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreetingWithPrevState";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";


function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false}/>
    </div>
  );
}

export default App;
