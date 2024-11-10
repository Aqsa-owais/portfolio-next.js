import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/pictures/logo.png";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" bg-pink-600 z-50 sticky top-0">
      <header className="text-gray-950 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* logo lagy ga yahan py */}
            <span className="ml-3 text-xl text-white">Aqsa Owais</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
            <Link href={"/"} className="mr-5 hover:text-black">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-black">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-black">
              Skills
            </Link>
            <Link href={"#Projects"} className="mr-5 hover:text-black">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-black">
              Contact
            </Link>
          </nav>

          <a href="/cv/professionalcv.jpg">
            <button className="inline-flex text-grey-950 items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 text-black rounded-2xl text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
