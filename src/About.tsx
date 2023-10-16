import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
    
    initial = {{opacity:0}}
    whileInView = {{opacity:1}}
    transition = {{duration:2}}
    
    className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/375414744_310575428128091_2965353411761850409_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=NXVL00WbzmQAX8izMQr&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfANzQII-o4NKTcov-5GAbSdpfWoDoeBL5mivu-XDOV-Rw&oe=6532828F&_nc_sid=8b3546"
        className=" z-20 -mb-20 md:mb-0 flex-shrink-0  w-32 h-32 mt-10  sm:w-64 sm:h-64 rounded-full object-cover  md:rounded-lg md:w-64 md:h-96 xl:h-[450px] xl:w-[450px] "
      />

      <div className="sm:space-y-10 sm:pt-20 px-0 md:px-10">
        <h4 className=" text-lg sm:text-3xl font-semibold">
          Here is a <span className="underline decoration-red-400">little</span>{" "}
          about me...
        </h4>
        <p className="flex justify-center text-base sm:text-lg ">
          My name is Saad Ahmed Qureshi and I am a passionate and
          dedicated software developer with a strong foundation in 
          JavaScript, TypeScript, Java, C++, and Python. As a fresher 
          , I am enthusiastic about leveraging my technical 
          skills and knowledge to create innovative and impactful solutions.
          My journey in software development has been fueled by a curiosity 
          to explore emerging technologies and a commitment to continuous learning. 🚀
           <br />
          I am committed to continuous learning and growth, always looking for ne
          opportunities to expand my skills and knowledge. 
          Connect with me on LinkedIn to learn more about my professional journey as
          a web developer and how I can contribute to your organization.✌️
        </p>
      </div>
    </motion.div>
  );
}

export default About;
