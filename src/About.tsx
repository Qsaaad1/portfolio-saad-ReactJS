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
        src="https://private-user-images.githubusercontent.com/101616957/266399842-5ae70a26-004b-44a5-b6c2-5cdcb87633fe.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQxMDkwNzIsIm5iZiI6MTY5NDEwODc3MiwicGF0aCI6Ii8xMDE2MTY5NTcvMjY2Mzk5ODQyLTVhZTcwYTI2LTAwNGItNDRhNS1iNmMyLTVjZGNiODc2MzNmZS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkwN1QxNzQ2MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NTIyM2ZjMDExMGEyYTJiYjgyYTJlYzZiN2VlZjk4MTNmMjI2ODQxMzgwN2MwZGUyMjllZjJiMmY1MjNhNTExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qrkT7xIRvyYIHphDPJ_-LxEthafmfTQjtAARb-6cJX0"
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
