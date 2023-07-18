import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I am Saad...",
      "I am a Developer",
      "Loves-Music.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/101616957?v=4"
        alt="Profile Picture"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#EF5350" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#education">
            <button className="heroButton">Education</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
