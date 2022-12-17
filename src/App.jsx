import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-blue-500">
          this is a project starter set up with tailwind, emmet, and
          intellisense
        </h1>
        <button className="bg-blue-400 py-3 bx-5 mt-5 focus:outline-none border-0 hover:bg-blue-300 transition-all .2s">
          press me
        </button>
      </div>
    </div>
  );
}

export default App;
