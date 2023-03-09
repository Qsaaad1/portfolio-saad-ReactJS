import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="data:image/png;base64,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"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale " // transition duration-300 ease-in-out
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">80%</p>
        </div>
      </div>

    {/* Try */}

    


      
    </div>
  );
}

export default Skill;
