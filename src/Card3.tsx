import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Card3({}: Props) {
  return (
    <article className="flex flex-col rounded-lg p-10 items-center space-y-7 flex-shrink-0 w-[600px] md:w-[700px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="data:image/png;base64,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"
      />

      <div className="px-0 space-y-4 md:px-10 ">
        <h4 className="text-4xl font-light">Secondary (X)</h4>
        <p className="text-2xl font-light">
        Shri Gujarati Samaj (CBSE Board)     
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>2017-2018</li>
          <li>Percentage : 80%</li>
        </ul>
      </div>
    </article>
  );
}

export default Card3;
