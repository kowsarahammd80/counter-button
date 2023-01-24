import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={handleCountUp}>Add Count</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
