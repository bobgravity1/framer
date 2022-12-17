import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex gap-8 justify-between">
        <div className="bg-blue-200 text-left big:bg-red-200 p-8 rounded-xl">
          <h2 className="text-orange-400  text-sm  big:text-red-600">
            this is a project starter set up with tailwind, emmet, and
            intellisense
          </h2>
          <button className="bg-blue-400 text-sm  text-white py-3 bx-5 mt-5 focus:outline-none border-0 hover:bg-blue-400/70  hover:scale-110  transition-all .2s">
            press me
          </button>
        </div>
        <div className="bg-blue-200 text-left  rounded-xl p-8 big:bg-red-200">
          <h2 className="text-orange-400 text-sm big:text-red-600">
            this is a project starter set up with tailwind, emmet, and
            intellisense
          </h2>
          <button className="bg-blue-400 text-sm text-white py-3 bx-5 mt-5 focus:outline-none border-0 hover:scale-110 hover:bg-blue-400/70  transition-all .2s">
            press me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
