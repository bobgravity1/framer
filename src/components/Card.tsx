import React from "react";
import { useMotionValue, motion, useTransform } from "framer-motion";

export const Card = ({ imageAnimate, textAnimation }) => {
  return (
    <motion.figure
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={imageAnimate}
      className="bg-slate-400  shadow-lg shadow-slate-900 rounded-xl my-4 md:w-1/2 lg:justify-center lg:w-full lg:flex lg:h-64"
    >
      <div className="overflow-hidden ">
        <img
          src="/img.jpg"
          className="rounded-t-xl w-96 mr-4 object-cover h-full float-left logo lg:rounded-l-lg lg:rounded-r-none"
        />
      </div>
      <figcaption className="w-full p-4">
        <h2 className="text-lg font-bold text-black">Title</h2>
        <p className="text-black pt-4 text-sm ">
          “This a test Tailwind starter kit! We have emmet and intellisensee
          enabled”
        </p>
        <blockquote className="text-bold pb-4 text-black text-sm">
          - Jessica L.
        </blockquote>
        <button className="mt-4 bg-blue-300 hover:bg-blue-400 hover:shadow-sm transition-all duration-200 text-black shadow-xl rounded-xl  lg:mt-1">
          Read more
        </button>
      </figcaption>
    </motion.figure>
  );
};
