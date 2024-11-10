"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import aqsapic from "@/app/pictures/hachthon copy.jpg";
import calc from "@/app/pictures/calculator.jpg"
import juice from "@/app/pictures/juices.jpg"
import html from "@/app/pictures/htmlwebsite.jpg"
import chase from "@/app/pictures/chase copy.jpg"
import figma from "@/app/pictures/figma-website copy.jpg"
import ages from "@/app/pictures/ages-website1.jpg"
import burger from "@/app/pictures/burgerwebsite.jpg"
import curve from "@/app/pictures/curvefooter.jpg"
import random from "@/app/pictures/randomnumbers.jpg"
import auguest from "@/app/pictures/auguest14.jpg"
import periodic from "@/app/pictures/periodictable.jpg"

const Projects = () => {
  return (
    <div id="Projects">
      <section className="text-gray-950 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I’ve worked extensively with HTML, CSS, JavaScript and TypeScript
              to build robust web foundations. With Bootstrap and Tailwind CSS,
              I’ve focused on responsive, visually engaging interfaces. Diving
              into modern frameworks like Next.js, I’ve enhanced my ability to
              create scalable, interactive web applications that are optimized
              for performance and user experience.
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[3rem] ">
            {/* project1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={aqsapic}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                  Hackathon SMIT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Excited to showcase my latest project for the SMIT hackathon: a responsive webpage created using HTML and CSS! This website is designed to adapt flawlessly to any device, providing a user-friendly experience for all visitors. 
                  </p>
                  <Link
                    href={"https://hackathon-nine-brown.vercel.app/"}
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 2*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={html}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    HTML website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Built a dedicated webpage using only HTML! Keeping it straightforward and focusing on structure, this project is a minimalist approach to web development—no CSS, no responsiveness, just pure HTML!
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_webdevelopment-html-coding-activity-7229139362637049856-w4co?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 3*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={juice}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    E-commerce Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Proud to showcase my fully responsive website crafted with HTML, CSS, and JavaScript! Designed for an engaging user experience across all devices, this site highlights my skills in building dynamic and adaptive web pages. Excited to contribute to this innovative event!
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_excited-to-share-my-latest-project-ive-activity-7229926936599293954-SeQ3?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 4*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ages}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    Ages Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Just launched an Ages website built with Next.js! This project features a custom loading page, error handling with dedicated error and general error pages, ensuring a seamless user experience. Excited to bring this idea to life with Next.js!
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_nextjs-webdevelopment-codingjourney-activity-7254812062571188224-udDY?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 5*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={figma}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    Website Using Figma template
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Created a sleek webpage using Next.js, designed from scratch in Figma! Blending design precision with Next.js functionality for a smooth, modern user experience. Excited to see this concept come to life!
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_nextjs-tailwindcss-figma-activity-7256573538432602113-bLB6?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 6*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={burger}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                  Burger Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Built a simple yet effective burger website using Next.js! A clean and functional site that brings the burger experience online with ease. Excited to share this easy-to-navigate project!
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_check-out-my-latest-creation-a-dynamic-activity-7261335809096646658-PQKQ?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 7 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={curve}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    Vertical Navbar with Curve Footer 
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Designed a sleek vertical navbar with a stylish curved footer using just HTML and CSS! A simple yet elegant layout that enhances the user experience with a clean and modern design.
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_webdevelopment-typescript-responsivedesign-activity-7251293124285648896-ENNS?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 8*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={random}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    Random Numbers Generate
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TASK
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Created a random number generator task using JavaScript! A fun and simple project that showcases how to generate unpredictable values for various applications. Check it out!"
                  </p>
                  <Link href={"https://www.linkedin.com/posts/aqsa-owais-1a2002319_webdevelopment-javascript-codingjourney-activity-7231307522266021888-9vjg?utm_source=share&utm_medium=member_desktop"} className="text-pink-600 hover:underline">
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 9 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={auguest}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    14 Auguest Celebration webpage
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBPAGE
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Created a special webpage to celebrate Pakistan's 14th Auguest! 🇵🇰 Built with JavaScript, this page captures the spirit of independence with engaging features. Proud to showcase this tribute to my country!.
                  </p>
                  <Link href={"https://www.linkedin.com/posts/aqsa-owais-1a2002319_independenceday-prideandunity-pakistanzindabad-activity-7229187430925426688-4bIl?utm_source=share&utm_medium=member_desktop"} className="text-pink-600 hover:underline">
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 10 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={periodic}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    Periodic Table
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TASK
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Created a dynamic periodic table using HTML! A simple yet informative project that organizes elements in a visually appealing way. Excited to share this educational tool!
                  </p>
                  <Link href={"https://www.linkedin.com/posts/aqsa-owais-1a2002319_webdevelopment-html-periodictable-activity-7228794093282185218-TqTp?utm_source=share&utm_medium=member_desktop"} className="text-pink-600 hover:underline">
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* commnts 11 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  width={900}
                  height={900}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={calc}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                  Calculator
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  TASK
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Built a functional calculator using HTML, CSS, and JavaScript! A sleek and responsive design that handles basic operations with ease. Excited to share this practical project!
                  </p>
                  <Link
                    href={"https://calculator-javascript-three.vercel.app/"}
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>


            {/* comments 12*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  width={900}
                  height={900}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={chase}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                  Chase Game
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TASK
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                  Created a fun chase game using just HTML and CSS! A simple yet engaging project that brings a dynamic gaming experience to life with minimal code. Check it out and join the chase!
                  </p>
                  <Link
                    href={
                      "https://www.linkedin.com/posts/aqsa-owais-1a2002319_webdevelopment-html-gamedesign-activity-7228373833051721728-8xOK?utm_source=share&utm_medium=member_desktop"
                    }
                    className="text-pink-600 hover:underline"
                  >
                    <p className="leading-relaxed">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            






          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
