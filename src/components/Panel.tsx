import React from "react";
import { useMotionValue, motion, useTransform } from "framer-motion";

export const Panel = ({ imageAnimate, textAnimation }) => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      className="my-8 container lg:my-24"
    >
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="w-128 lg:w-full">
          <motion.img
            variants={imageAnimate}
            src="/panel.jpg"
            className="w-128 shadow-lg shadow-slate-900 rounded-xl object-cover"
            alt="dentist office"
          />
        </div>
        <motion.section variants={textAnimation} className="w-full">
          <h3 className="mt-8 lg:mt-0  text-bold mb-3 text-white font-bold text-lg ">
            Lorem Ipsum
          </h3>
          <p className="mr-8 text-white mt-4 xl:text-md ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};
