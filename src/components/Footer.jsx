import React from "react";

import LogoWhite from "../assets/img/logo-white.svg";

const date = () => {
  let date = 2021;
  let current = new Date().getFullYear();
  return date === current ? date : `${date} - ${current}`;
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary py-12">
      <div className="container mx-auto text-white text-sm lg:text-base font-tertiary tracking-wide font-extralight lg:text-sm flex flex-col lg:flex-row justify-between items-center">
        <a href="#home" className="mb-4 lg:mb-0">
          <img src={LogoWhite} alt="logo" />
        </a>
        Copyright &copy; {date()}. All rights reserved.
      </div>

      <div className="px-[15px] lg:px-0">
        <div className="text-gray-500 font-normal text-xs lg:text-sm w-full text-center mt-4 pt-2 container mx-auto border-t-[1px] border-gray-700/70">
          Powered by{" "}
          <a
            href="https://pavelbelousov.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all ease-in"
          >
            @signorPao
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
