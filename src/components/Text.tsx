import React from "react";
import { useMotionValue, motion, useTransform } from "framer-motion";

export const Text = ({ imageAnimate, textAnimation }) => {
  return (
    <motion.article
      initial={"offscreen"}
      whileInView={"onscreen"}
      className="text-white text-sm lg:pl-8 container rounded-xl my-4 lg:text-sm "
    >
      <motion.section variants={textAnimation}>
        <h3 className="font-bold mb-3 text-lg ">Lorem Ipsum</h3>
        <p className="xl:text-md">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <p className="mt-4 xl:text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </motion.section>
    </motion.article>
  );
};
