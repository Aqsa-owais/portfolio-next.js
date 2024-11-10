import React from "react";
import Image from "next/image";
import aqsapic from "@/app/pictures/technology.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-950 body-font bg-slate-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />I am passionate developer
            </h1>
            <p className="mb-5 leading-relaxed">
              Hello, I’m Aqsa, a versatile web developer, generative AI
              engineer, and graphic designer. With a strong foundation in
              creating dynamic and responsive websites, I bring a keen eye for
              both functionality and aesthetics to every project I take on. My
              expertise in web development allows me to craft seamless user
              experiences with modern frameworks like Next.js and Tailwind CSS,
              ensuring that each site is both visually appealing and technically
              robust.
            </p>
            <p>
              {" "}
              As a generative AI engineer, I have a passion for exploring
              cutting-edge AI technologies, working with advanced algorithms,
              and designing innovative, data-driven solutions that solve
              real-world challenges. Additionally, my background in graphic
              design enables me to blend visual creativity with technical
              precision, making my work engaging and impactful. I’m dedicated to
              continuous learning and thrive on bringing creative concepts to
              life through a unique blend of development, AI, and design.
            </p>
            <div className="flex justify-center">
              <Link href={"/cv/professionalcv.jpg"}>
                <button className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-full h-full"
              alt="hero"
              src={aqsapic}
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
