import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skills/Skill";
import Skill2 from "./Skills/Skill2";
import Skill3 from "./Skills/Skill3";
import Skill4 from "./Skills/Skill4";
import Skill5 from "./Skills/Skill5";
import Skill6 from "./Skills/Skill6";
import Skill7 from "./Skills/Skill7";
import Skill8 from "./Skills/Skill8";
import Skill9 from "./Skills/Skill9";
import Skill10 from "./Skills/Skill10";
import Skill11 from "./Skills/Skill11";
import Skill12 from "./Skills/Skill12";
import Skill13 from "./Skills/Skill13";
import Skill14 from "./Skills/Skill14";
import Skill15 from "./Skills/Skill15";
import Skill16 from "./Skills/Skill16";


type Props = {};

function Skills({}: Props) {
  return (
    <motion.div 
    initial ={{opacity:0}}
    whileInView = {{opacity:1}}
    transition = {{duration:1.5}}

    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-2xl  ">
        Hover over to learn more
      </h3>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-5 py-48 sm:h-screen">
        <Skill/>
        <Skill12/>
        <Skill2/>
        <Skill3/>
        <Skill7/>
        <Skill10/>
        <Skill4/>
        <Skill6/>
        <Skill5/>
        <Skill9/>
        <Skill11/>
        <Skill8/>
        <Skill13/>
        <Skill14/>
        <Skill15/>
        <Skill16/>

       
      </div>
    </motion.div>
  );
}

export default Skills;
