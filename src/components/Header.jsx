import React, { useEffect, useState } from "react";

import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all ease-in duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            <img src={LogoDark} className="w-[120px] lg:w-[160px]" />
          ) : (
            <img src={LogoWhite} className="w-[120px] lg:w-[160px]" />
          )}
        </a>

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-xs lg:text-[15px] items-center uppercase`}
        >
          <a href="#home" className="hover:text-accent transition-all">
            Home
          </a>
          <a href="#rooms" className="hover:text-accent transition-all">
            Rooms
          </a>
          <a href="#!" className="hover:text-accent transition-all">
            Restaurant
          </a>
          <a href="#!" className="hover:text-accent transition-all">
            Spa
          </a>
          <a href="#!" className="hover:text-accent transition-all">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
