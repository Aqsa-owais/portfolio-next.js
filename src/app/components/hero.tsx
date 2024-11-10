"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import aqsapic from "@/app/pictures/aqsafinalpic.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-slate-100">
      <section className="text-gray-950 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Graphic Designer ",
                    "Generative AI Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-pink-600"></div>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-white bg-pink-600  border-0 py-2 px-6 focus:outline-none hover:bg-gray-600  rounded text-lg">
                  Contact
                </button>
              </Link>
              <Link href={"#Projects"}>
                <button className="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
                  Projects
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
            <Image
            id="imgage"
              alt="heroImg"
              src={aqsapic}
              width={900}
              height={900}
              className="object-cover object-center  w-[300px]  h-[400px] bg-slate-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
