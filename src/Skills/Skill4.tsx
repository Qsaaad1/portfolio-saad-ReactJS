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
         src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
        
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-20 sm:h-20 md:h-24 md:w-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>

    {/* Try */}

    


      
    </div>
  );
}

export default Skill;
