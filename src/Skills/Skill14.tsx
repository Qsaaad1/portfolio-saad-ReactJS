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
          <p className="text-3xl font-bold text-black opacity-100">70%</p>
        </div>
      </div>

    {/* Try */}

    


      
    </div>
  );
}

export default Skill;
