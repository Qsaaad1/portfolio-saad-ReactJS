import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
         initial={{ opacity: 0, x: directionLeft ? -100 : 100 }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
         className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-20 sm:h-20 md:h-24 md:w-24   filter group-hover:grayscale " // transition duration-300 ease-in-out
         src="data:image/png;base64,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"
        
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-20 sm:h-20 md:h-24 md:w-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">75%</p>
        </div>
      </div>

    {/* Try */}

    


      
    </div>
  );
}

export default Skill;
