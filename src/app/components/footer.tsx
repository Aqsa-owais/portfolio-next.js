import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import footerImg from "../../../public/pictures/logo.png"

const Footer = () => {
  return (
    <div className="bg-pink-600">
      <footer className="text-white body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            {/* footer img lagy gi */}
            <span className="ml-3 text-xl">Aqsa</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 aqsa —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"#"} className="text-white hover:text-gray-700">
              <FaFacebook className="text-3xl"/>
            </Link>
            <Link href={"#"} className="ml-3 text-white">
              <FaYoutube className="text-3xl hover:text-gray-700"/>
            </Link>
            <Link href={"#"} className="ml-3 text-white">
              <FaInstagram className="text-3xl hover:text-gray-700"/>
            </Link>
            <Link href={"#"} target="_blank" className="ml-3 text-white">
              <FaGithub className="text-3xl hover:text-gray-700"/>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
