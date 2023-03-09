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
        src="https://user-images.githubusercontent.com/101616957/223126135-d0e84b66-3e60-40ac-abfc-88a18cfbd0cf.jpg"
        className=" z-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-96 xl:h-[500px] xl:w-[500px] "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-red-400">little</span>{" "}
          about me...
        </h4>
        <p>
          My name is Saad Ahmed Qureshi and I am a highly motivated individual
          with a passion for success 💯. I bring a wealth of knowledge and
          experience to any project. I am a strong leader and team player, able
          to effectively communicate and collaborate with others to achieve
          common goals 🌟. I am committed to continuous learning and growth,
          always looking for new opportunities to expand my skills and
          knowledge. In my free time, I enjoy playing Chess ♛. Connect with me
          on LinkedIn to learn more about my professional journey as a web
          developer and how I can contribute to your organization.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
