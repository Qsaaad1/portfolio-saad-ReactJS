import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Project2({}: Props) {
  return (
    <div>
      <div className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 md:mt-12 xl:mt-16  items-center justify-center p-20 md:p-44 xl:p-64 h-screen">
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg h-[150px] w-[300px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]   "
          src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
        />
        <div className="space-y-10 px-0 md:px-10  max-w-6xl  ">
          <h4 className="text-4xl font-semibold text-center">
            <span className="underline decoration-[#EF5350]/60">Project 2</span>{" "}
            : Amazon Clone{" "}
          </h4>

          <p className="text-lg text-center">
          Amazon Clone App using ReactJS & NodeJS with Context API and deployed on Firebase...
          </p>
          <div className="flex flex-row mx-auto text-center justify-center">
            <a href="https://react--clone-25e09.web.app/">
            <button className="linkButton">Demo</button>
            </a>
            <a href="https://github.com/Qsaaad1/React-Amazon-Clone">
            <button className="linkButton">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
