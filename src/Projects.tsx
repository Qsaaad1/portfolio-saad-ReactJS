import { motion } from "framer-motion";
import React from "react";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";
import Project4 from "./Project/Project4";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative flex overflow-hidden flex-col text-left  max-w-full justify-evenly mx-auto items-center z-0  h-screen overflow-y-hidden "
    >
      <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className=" w-full z-20 flex space-x-5 overflow-x-scroll overflow-y-hidden  p-10 snap-x snap-mandatory scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80  ">
      {/* w-full z-20 flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory */}
        {/* Projects Cards */}
        <Project3 />
        <Project4 />
        <Project2 />
{/*         <Project1 /> */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#EF5350]/40 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
