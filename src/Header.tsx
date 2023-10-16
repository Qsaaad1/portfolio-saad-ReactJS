import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center "
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/Qsaaad1"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/saad-ahmed-qureshi-936799234/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/qsaaad1/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* Nav */}
        <a
          download="Resume"
          href="https://drive.google.com/file/d/1lug9x5yOICQnX0UG4NKap-Ql5x6NXiQP/view?usp=drivesdk"
          target="_blank"
          className="text-sm text-gray-400 border border-gray-400 rounded-full   px-4 py-1  transition-all hover:border-red-400 hover:text-red-400 "
        >
          <button>RESUME</button>
        </a>

        <a href="#contact">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
          <div className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-red-400">
            Get in Touch
          </div>
        </a>
      </motion.div>
    </header>
  );
}
