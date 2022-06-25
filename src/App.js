import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num, setNum] = React.useState(0);

  return (
    <div className="App">
      <h1>{num}</h1>
      <button className="button-9" onClick={() => setNum(num + 1)}>
        Incr
      </button>
      <button className="button-9" onClick={() => num && setNum(num - 1)}>
        Decr
      </button>
    </div>
  );
}

export default App;
