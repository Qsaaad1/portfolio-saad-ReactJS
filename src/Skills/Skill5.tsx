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
        src="data:image/jpeg;base64,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"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale " // transition duration-300 ease-in-out
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">75%</p>
        </div>
      </div>

    {/* Try */}

    


      
    </div>
  );
}

export default Skill;
