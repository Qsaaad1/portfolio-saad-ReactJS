import { motion } from "framer-motion";

type Props = {};

function Project3({}: Props) {
  return (
    <div>
      <div className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 md:mt-32 xl:mt-36 items-center justify-center p-20 md:p-44 xl:p-64 h-screen">
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg h-[150px] w-[300px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]   "
          src="https://user-images.githubusercontent.com/101616957/224053302-9e84a7df-5813-4d4f-a76d-0031e730f553.jpg"
        />
        <div className="space-y-10 px-0 md:px-10  max-w-6xl  ">
          <h4 className="text-4xl font-semibold text-center">
            <span className="underline decoration-[#EF5350]/60">Project 3</span>{" "}
            : Rangoli Studio{" "}
          </h4>

          <p className="text-lg text-center">
          App to create Rangoli designs easily. Made with Python and tkinter.
          </p>
          <div className="flex flex-row mx-auto text-center justify-center">
            <a href="https://github.com/Qsaaad1/Rangoli-Studio">
            <button className="linkButton">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
