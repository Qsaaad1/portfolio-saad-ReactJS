import { motion } from "framer-motion";
import React from "react";

type Props = {};

function EducationCard({}: Props) {
  return (
    <article className=" flex flex-col rounded-lg p-2 items-center space-y-10 flex-shrink-0 w-[400px] sm:w-[600px] md:w-[700px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CiFk5rqDkGw7W23cPDrsoUpBRV8kM_MBUA&usqp=CAU"
      />

      <div className="px-0 space-y-4 md:px-10 ">
        <h4 className="sm:text-4xl font-light">Bachelor of Technology</h4>
        <p className=" sm:text-2xl font-light">
          Shri Vaishnav Vidyapeeth Vishwavidyalaya
        </p>
        <p className="sm:text-2xl font-light">
          Specialization in Mobile Application
        </p>
        <ul className="list-disc space-y-4 ml-5 sm:text-lg ">
          <li>2020-2024</li>
          <li>CGPA : 7.6/10</li>
        </ul>
      </div>
    </article>
  );
}

export default EducationCard;
