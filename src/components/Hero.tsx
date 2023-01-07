import React from "react";

export const Hero = () => {
  return (
    <div
      className="relative hero mt-0 overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: "50%",
        height: "85vh",
      }}
    >
      <div className="container">
        {" "}
        <div className="top-1/4 absolute">
          <h1 className="text-xl font-bold ">Welcome</h1>
          <p className="text-md">
            We are here to help with any dental services!
          </p>
          <button className="bg-transparent focus:outline-none border-2 mt-4 font-bold border-slate-800">
            Enter
          </button>
        </div>
      </div>
      <img className="absolute z-10 bottom-0" src="/wave.svg" alt="wave" />
    </div>
  );
};
