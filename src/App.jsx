import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./components/Card";
import { Text } from "./components/Text";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Panel } from "./components/Panel";
// import img from "/img.jpg";

const imageAnimate = {
  offscreen: { x: -100 },
  onscreen: { x: 0, rotate: [0, 10, 0] },
  transition: { duration: 1 },
};

const textAnimation = {
  offscreen: { x: -100, scale: 0 },
  onscreen: { x: 0, scale: 1 },
  transition: { duration: 1 },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-700 App">
        <Nav />
        <Hero />
        <Panel textAnimation={textAnimation} imageAnimate={imageAnimate} />
        <div className="mt-8 lg:flex container  lg:items-center lg:justify-between">
          <div className=" container md:flex md:gap-8 lg:w-full md:justify-between lg:justify-start lg:flex-col lg:gap-0">
            <Card textAnimation={textAnimation} imageAnimate={imageAnimate} />
            <Card textAnimation={textAnimation} imageAnimate={imageAnimate} />
          </div>
          <Text />
        </div>
      </div>
    </>
  );
}

export default App;
