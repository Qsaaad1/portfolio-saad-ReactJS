import Link from "next/link";
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
        src="https://user-images.githubusercontent.com/101616957/223125591-adbc7ccd-777e-445a-8066-45847239326f.jpeg"
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
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
